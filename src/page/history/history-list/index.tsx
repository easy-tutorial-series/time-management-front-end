import { Avatar, Box, Dialog, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate'
import HelpIcon from '@material-ui/icons/Help'
import { TaskCardPreview } from 'component/task-card/preview'
import { isTaskRejected, isTaskResolved, Task } from 'model/task'
import { compose } from 'ramda'
import React, { useState } from 'react'
import { useToggle } from 'react-use'
import { formatUnixTimestamp } from 'util/date'
import { useStyles } from './index.style'


export type HistoryListProps = {
    tasks: Task[]
}
export const HistoryList = (p: HistoryListProps) => {
    const [isModalOpen, setIsModalOpen] = useToggle(false)
    const [openModal, closeModal] = [() => setIsModalOpen(true), () => setIsModalOpen(false)]
    const [currentTaskView, setCurrentTaskView] = useState<Task>()
    const onItemClick: HistoryListItemProps['onItemClick'] = compose(openModal, setCurrentTaskView)

    return (
        <Box>
            <List>
                {p.tasks.map(t => <HistoryListItem task={t} onItemClick={onItemClick} />)}
            </List>
            <Dialog open={isModalOpen} onClose={closeModal}>
                {currentTaskView && <TaskCardPreview task={currentTaskView} />}
            </Dialog>
        </Box>
    )
}

type HistoryListItemProps = { task: Task, onItemClick: (t: Task) => any }
const HistoryListItem = (p: HistoryListItemProps) => {
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

    return <ListItem button onClick={() => p.onItemClick(p.task)}>
        <ListItemAvatar>
            <Avatar className={styles.avatar}>{chipIcon(p.task)}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={p.task.name} secondary={time(p.task)} />
    </ListItem >
}