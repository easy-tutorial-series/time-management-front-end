import React from "react"
import { Card, CardHeader, CardContent, Typography, Button } from "@material-ui/core"
import { Identity } from "type/utils"

export type TaskCardProps = {
    desc: string
} & Identity
const TaskCard = (p: TaskCardProps) => {
    return (
        <Card>
            <CardHeader title={p.name} />
            <CardContent>
                <Typography>{p.desc}</Typography>
                <Button variant="outlined">resolve</Button>
                <Button variant="outlined">reject</Button>
            </CardContent>
        </Card>
    )
}
export default TaskCard
