import { Box, Card, CardActions, CardContent, InputProps, TextField } from '@material-ui/core'
import { Task } from 'model/task'
import { pick } from 'ramda'
import React from 'react'
import { colorMap } from 'style/mui-theme'
import { noop } from 'util/fn'
import { useStyles } from './index.style'

export type TaskCardBaseProps = {
    task: Task
    onTaskChange?: (t: Task) => any
    actionPart?: JSX.Element
} & Pick<InputProps, 'readOnly'>

export const TaskCardBase = (p: TaskCardBaseProps) => {
    const styles = useStyles({ bgColor: colorMap[p.task.type] })
    const textFieldInputProps = pick(['readOnly'], p)
    return (
        <div>
            <Card className={styles.card}>
                <CardContent>
                    <TextField
                        InputProps={textFieldInputProps}
                        fullWidth
                        label="Name"
                        placeholder="Give it a name"
                        value={p.task.name}
                        onChange={(e) => (p.onTaskChange ?? noop)({ ...p.task, name: e.target.value })}
                    />
                    <Box mb={1} />
                    <TextField
                        InputProps={textFieldInputProps}
                        fullWidth
                        label="Description"
                        placeholder="How do you plan it?"
                        value={p.task.desc}
                        onChange={(e) => (p.onTaskChange ?? noop)({ ...p.task, desc: e.target.value })}
                    />
                </CardContent>
                <CardActions>
                    {p.actionPart}
                </CardActions>
            </Card>
        </div>
    )
}