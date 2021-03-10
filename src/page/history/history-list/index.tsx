import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate'
import HelpIcon from '@material-ui/icons/Help'
import { isTaskRejected, isTaskResolved, Task } from 'model/task'
import React from 'react'
import { formatUnixTimestamp } from 'util/date'
import { useStyles } from './index.style'


export type HistoryListProps = {
    tasks: Task[]
}
export const HistoryList = (p: HistoryListProps) => {
    return (
        <div>
            {p.tasks.map(t => <HistoryListItem task={t} />)}
        </div>
    )
}

const HistoryListItem = (p: { task: Task }) => {
    const styles = useStyles()

    const chipIcon = (t: Task) => {
        if (isTaskRejected(t)) return <AssignmentLateIcon className={styles.rejected} />
        if (isTaskResolved(t)) return <AssignmentIcon className={styles.resolved} />
        return <HelpIcon />
    }

    const time = (t: Task) => {
        if (isTaskRejected(t)) return formatUnixTimestamp(t.rejectedTime)
        if (isTaskResolved(t)) return formatUnixTimestamp(t.resolvedTime)
        return ''
    }

    return <ListItem button>
        <ListItemAvatar>
            <Avatar className={styles.avatar}>{chipIcon(p.task)}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={p.task.name} secondary={time(p.task)} />
    </ListItem>
}