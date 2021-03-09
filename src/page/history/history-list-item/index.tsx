import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate'
import HelpIcon from '@material-ui/icons/Help'
import { isTaskRejected, isTaskResolved, Task } from 'model/task'
import React from 'react'
import { formatUnixTimestamp } from 'util/date'
import { useStyles } from './index.style'


export type HistoryListItemProps = {
    task: Task
}
export const HistoryListItem = (p: HistoryListItemProps) => {
    const styles = useStyles()
    const chipIcon = () => {
        if (isTaskRejected(p.task)) return <AssignmentLateIcon className={styles.rejected} />
        if (isTaskResolved(p.task)) return <AssignmentIcon className={styles.resolved} />
        return <HelpIcon />
    }
    const time = () => {
        if (isTaskRejected(p.task)) return formatUnixTimestamp(p.task.rejectedTime)
        if (isTaskResolved(p.task)) return formatUnixTimestamp(p.task.resolvedTime)
        return ''
    }
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar className={styles.avatar}>{chipIcon()}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={p.task.name} secondary={time()} />
        </ListItem>
    )
}