import { Box, Toolbar, Typography } from "@material-ui/core"
import { Task, TaskDataContainer } from "context"
import React from "react"
import { useStyles } from "../index.style"

type QuadrantOrder = 1 | 2 | 3 | 4
export type QuadrantProps = {
    type: Task["type"]
    order: QuadrantOrder
}
const Quadrant = (p: QuadrantProps) => {
    const { tasks } = TaskDataContainer.useContainer()
    const styles = useStyles()
    const toolBarStyle = (o: QuadrantOrder) => {
        if (o === 1) return styles.quadrant1ToolBar
        if (o === 2) return styles.quadrant2ToolBar
        if (o === 3) return styles.quadrant3ToolBar
        if (o === 4) return styles.quadrant4ToolBar
    }
    return (
        <div>
            <Box className={styles.quadrant}>
                <Toolbar className={toolBarStyle(p.order)}>
                    <Typography variant="h5">{p.type}</Typography>
                </Toolbar>
                <Box overflow="scroll">{renderTasks(tasks, p.type)}</Box>
            </Box>
        </div>
    )
}

const renderTasks = (tasks: Task[], type: Task["type"]) =>
    tasks
        .filter((t) => t.type === type)
        .map((t) => (
            <div key={t.id}>
                <Typography>{t.name}</Typography>
            </div>
        ))

export default Quadrant
