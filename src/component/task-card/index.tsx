import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardActions,
    CardContent,
    TextField,
} from "@material-ui/core"
import React from "react"
import { Task } from 'state-management/task'
import { useStyles, StyleProps } from "./index.style"

export type TaskCardProps = {
    task: Task
    color: StyleProps["bgColor"]
    onResolved: (id: Task["id"]) => any
    onCancel: (id: Task["id"]) => any
    onDragStart: (e: React.DragEvent<HTMLElement>, t: Task) => any
    onTaskChange: (t: Task) => any
}

const TaskCard = (p: TaskCardProps) => {
    const styles = useStyles({ bgColor: p.color })
    return (
        <Box onDragStart={(e) => p.onDragStart(e, p.task)} draggable>
            <Card className={styles.card}>
                <CardContent>
                    <TextField
                        fullWidth
                        label="Name"
                        placeholder="Give it a name"
                        value={p.task.name}
                        onChange={(e) => p.onTaskChange({ ...p.task, name: e.target.value })}
                    />
                    <Box mb={1} />
                    <TextField
                        fullWidth
                        label="Description"
                        placeholder="How do you plan it?"
                        value={p.task.desc}
                        onChange={(e) => p.onTaskChange({ ...p.task, desc: e.target.value })}
                    />
                </CardContent>
                <CardActions>
                    <ButtonGroup>
                        <Button
                            color="primary"
                            size="small"
                            variant="contained"
                            onClick={() => p.onResolved(p.task.id)}
                        >
                            resolve
                        </Button>
                        <Button
                            color="secondary"
                            size="small"
                            variant="contained"
                            onClick={() => p.onCancel(p.task.id)}
                        >
                            cancel
                        </Button>
                    </ButtonGroup>
                </CardActions>
            </Card>
        </Box>
    )
}
export default TaskCard
