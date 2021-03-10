import {
    Box,
    Button,
    ButtonGroup
} from "@material-ui/core"
import { Task } from 'model/task'
import { pick } from 'ramda'
import React from "react"
import { TaskCardBase, TaskCardBaseProps } from '../base'

export type TaskCardProps = {
    onResolved: (id: Task["id"]) => any
    onCancel: (id: Task["id"]) => any
    onDragStart: (e: React.DragEvent<HTMLElement>, t: Task) => any
} & Pick<TaskCardBaseProps,
    | 'onTaskChange'
    | 'task'>

const TaskCardEdit = (p: TaskCardProps) => {
    const taskCardBaseProps = pick(['onTaskChange', 'task'], p)
    return (
        <Box onDragStart={(e) => p.onDragStart(e, p.task)} draggable>
            <TaskCardBase
                {...taskCardBaseProps}
                actionPart={
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
                }
            />
        </Box>
    )
}
export default TaskCardEdit
