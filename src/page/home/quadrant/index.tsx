import { Box, Button, Toolbar, Typography } from "@material-ui/core"
import Anim from "component/anim"
import TaskCardEdit, { TaskCardProps } from "component/task-card/edit"
import { Task } from 'model/task'
import React from "react"
import { useTaskState } from 'state-management/task'
import { colorMap } from "style/mui-theme"
import { useStyles } from "./index.style"


type QuadrantOrder = 0 | 1 | 2 | 3
export type QuadrantProps = {
    type: Task["type"]
    order: QuadrantOrder
}
const Quadrant = (p: QuadrantProps) => {
    const { onGoingTasks, resolveTask, newTask, rejectTask, updateTask } = useTaskState()
    const styleList = [
        useStyles({ bgColor: colorMap["urgent-important"] }),
        useStyles({ bgColor: colorMap["notUrgent-important"] }),
        useStyles({ bgColor: colorMap["urgent-notImportant"] }),
        useStyles({ bgColor: colorMap["notUrgent-notImportant"] }),
    ]
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
            <Box className={styleList[p.order].quadrant}>
                <Toolbar className={styleList[p.order].toolbar}>
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
                        onGoingTasks(),
                        p.type,
                        rejectTask,
                        resolveTask,
                        onTaskDragStart,
                        updateTask,
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
) =>
    tasks
        .filter((t) => t.type === type)
        .map((t) => (
            <Box key={t.id} m={1}>
                <Anim type="bounceIn">
                    <TaskCardEdit
                        task={t}
                        onTaskChange={onTaskChange}
                        onResolved={onResolved}
                        onCancel={onCancel}
                        onDragStart={onDragStart}
                    />
                </Anim>
            </Box>
        ))

export default Quadrant
