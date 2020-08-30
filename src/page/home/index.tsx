import React from "react"
import { Box, Typography } from "@material-ui/core"
import { useStyles } from "./index.style"
import { TaskDataContainer, Task } from "context"

export type HomePageProps = {}
const HomePage = (p: HomePageProps) => {
    const styles = useStyles()
    const { tasks } = TaskDataContainer.useContainer()
    return (
        <div>
            <Box display="flex" flexDirection="row">
                <Box className={styles.quadrant}>{renderTasks(tasks, "urgent-important")}</Box>
                <Box className={styles.quadrant}>{renderTasks(tasks, "notUrgent-important")}</Box>
            </Box>
            <Box display="flex" flexDirection="row">
                <Box className={styles.quadrant}>{renderTasks(tasks, "urgent-notImportant")}</Box>
                <Box className={styles.quadrant}>
                    {renderTasks(tasks, "notUrgent-notImportant")}
                </Box>
            </Box>
        </div>
    )
}

const renderTasks = (tasks: Task[], type: Task["type"]) =>
    tasks.filter((t) => t.type === type).map((t) => <Typography>{t.name}</Typography>)


export default HomePage
