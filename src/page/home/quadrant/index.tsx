import { Box, Button, Toolbar, Typography } from "@material-ui/core"
import TaskCard, { TaskCardProps } from "component/task-card"
import { Task, TaskDataContainer } from "context"
import React from "react"
import { useStyles } from "../index.style"
import { colorMap } from "style/mui-theme"

type QuadrantOrder = 1 | 2 | 3 | 4
export type QuadrantProps = {
    type: Task["type"]
    order: QuadrantOrder
}
const Quadrant = (p: QuadrantProps) => {
    const { tasks, newTask, deleteTask, updateTask } = TaskDataContainer.useContainer()
    const styles = useStyles({
        quadrantOneColor: colorMap["urgent-important"],
        quadrantTwoColor: colorMap["notUrgent-important"],
        quadrantThreeColor: colorMap["urgent-notImportant"],
        quadrantFourColor: colorMap["notUrgent-notImportant"],
    })
    const toolBarStyle = (o: QuadrantOrder) =>
        o === 1
            ? styles.quadrant1ToolBar
            : o === 2
            ? styles.quadrant2ToolBar
            : o === 3
            ? styles.quadrant3ToolBar
            : o === 4
            ? styles.quadrant4ToolBar
            : ""

    const onClick = () => newTask(p.type)
    const onTaskDragStart: TaskCardProps["onDragStart"] = (e, t) => {
        e.dataTransfer.setData("task", JSON.stringify(t))
    }
    const onTaskDrop = (e: React.DragEvent<HTMLDivElement>) => {
        const task = JSON.parse(e.dataTransfer.getData("task"))
        updateTask({ ...task, type: p.type })
    }
    return (
        <div onDragOver={(e) => e.preventDefault()} onDrop={onTaskDrop}>
            <Box className={styles.quadrant}>
                <Toolbar className={toolBarStyle(p.order)}>
                    <Typography variant="h5">{p.type}</Typography>
                    <Button color="primary" variant="contained" onClick={onClick}>
                        new
                    </Button>
                </Toolbar>
                <Box
                    overflow="scroll"
                    maxHeight="30vh"
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                >
                    {renderTasks(
                        tasks,
                        p.type,
                        () => {},
                        deleteTask,
                        onTaskDragStart,
                        updateTask,
                        colorMap[p.type]
                    )}
                </Box>
            </Box>
        </div>
    )
}

const renderTasks = (
    tasks: Task[],
    type: Task["type"],
    onResolved: TaskCardProps["onResolved"],
    onCancel: TaskCardProps["onCancel"],
    onDragStart: TaskCardProps["onDragStart"],
    onTaskChange: TaskCardProps["onTaskChange"],
    color: TaskCardProps["color"]
) =>
    tasks
        .filter((t) => t.type === type)
        .map((t) => (
            <Box key={t.id} m={1}>
                <TaskCard
                    color={color}
                    task={t}
                    onTaskChange={onTaskChange}
                    onResolved={onCancel}
                    onCancel={onCancel}
                    onDragStart={onDragStart}
                />
            </Box>
        ))

export default Quadrant
