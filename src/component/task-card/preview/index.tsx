import { Box } from '@material-ui/core'
import { pick } from 'ramda'
import React from 'react'
import { TaskCardBase, TaskCardBaseProps } from '../base'

export type TaskCardPreviewProps = {

} & Pick<TaskCardBaseProps,
    | 'task'>

export const TaskCardPreview = (p: TaskCardPreviewProps) => {
    const taskCardBaseProps = pick(['onTaskChange', 'task'], p)
    return (
        <Box>
            <TaskCardBase {...taskCardBaseProps} readOnly />
        </Box>
    )
}