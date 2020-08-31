import { Box, Button, Toolbar, Typography } from "@material-ui/core"
import TaskCard, { TaskCardProps } from "component/task-card"
import { Task, TaskDataContainer } from "context"
import React from "react"
import { useStyles } from "../index.style"

type QuadrantOrder = 1 | 2 | 3 | 4
export type QuadrantProps = {
    type: Task["type"]
    order: QuadrantOrder
}
const Quadrant = (p: QuadrantProps) => {
    const { tasks, newTask, deleteTask } = TaskDataContainer.useContainer()
    const styles = useStyles()
    const toolBarStyle = (o: QuadrantOrder) => {
        if (o === 1) return styles.quadrant1ToolBar
        if (o === 2) return styles.quadrant2ToolBar
        if (o === 3) return styles.quadrant3ToolBar
        if (o === 4) return styles.quadrant4ToolBar
    }
    const onClick = () => newTask(p.type)
    return (
        <div>
            <Box className={styles.quadrant}>
                <Toolbar className={toolBarStyle(p.order)}>
                    <Typography variant="h5">{p.type}</Typography>
                    <Button variant="contained" onClick={onClick}>
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
                    {renderTasks(tasks, p.type, () => {}, deleteTask)}
                </Box>
            </Box>
        </div>
    )
}

const renderTasks = (
    tasks: Task[],
    type: Task["type"],
    onResolved: TaskCardProps["onResolved"],
    onCancel: TaskCardProps["onCancel"]
) =>
    tasks
        .filter((t) => t.type === type)
        .map((t) => (
            <Box key={t.id} m={1}>
                <TaskCard {...t} onResolved={onCancel} onCancel={onCancel} />
            </Box>
        ))

export default Quadrant
