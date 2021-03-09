import React from 'react'
import { useTaskState } from 'state-management/task'
import { HistoryListItem } from './history-list-item'

export type HistoryPageProps = {}
export const HistoryPage = (p: HistoryPageProps) => {
    const { historicTasks } = useTaskState()
    return (
        <div>
            {
                historicTasks().map(t => <HistoryListItem key={t.id} task={t} />)
            }
        </div>
    )
}