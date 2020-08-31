import { Button, ButtonGroup, Card, CardContent, CardHeader, Typography } from "@material-ui/core"
import { Task } from "context"
import React from "react"
import { useStyles } from "./index.style"

export type TaskCardProps = Task & {
    onResolved: (id: Task["id"]) => any
    onCancel: (id: Task["id"]) => any
}
const TaskCard = (p: TaskCardProps) => {
    const styles = useStyles()
    return (
        <Card className={styles.card}>
            <CardHeader title={p.name} />
            <CardContent>
                <Typography>{p.desc}</Typography>
                <ButtonGroup>
                    <Button size="small" variant="outlined" onClick={() => p.onResolved(p.id)}>
                        resolve
                    </Button>
                    <Button size="small" variant="outlined" onClick={() => p.onCancel(p.id)}>
                        cancel
                    </Button>
                </ButtonGroup>
            </CardContent>
        </Card>
    )
}
export default TaskCard
