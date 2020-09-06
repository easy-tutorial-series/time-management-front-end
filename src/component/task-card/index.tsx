import {
    Button,
    ButtonGroup,
    Card,
    CardContent,
    CardHeader,
    Typography,
    Box,
} from "@material-ui/core"
import { Task } from "context"
import React from "react"
import { useStyles } from "./index.style"

export type TaskCardProps = {
    task: Task
    onResolved: (id: Task["id"]) => any
    onCancel: (id: Task["id"]) => any
    onDragStart: (e: React.DragEvent<HTMLElement>, t: Task) => any
}
const TaskCard = (p: TaskCardProps) => {
    const styles = useStyles()
    return (
        <Box onDragStart={(e) => p.onDragStart(e, p.task)} draggable>
            <Card className={styles.card}>
                <CardHeader title={p.task.name} />
                <CardContent>
                    <Typography>{p.task.desc}</Typography>
                    <ButtonGroup>
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={() => p.onResolved(p.task.id)}
                        >
                            resolve
                        </Button>
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={() => p.onCancel(p.task.id)}
                        >
                            cancel
                        </Button>
                    </ButtonGroup>
                </CardContent>
            </Card>
        </Box>
    )
}
export default TaskCard
