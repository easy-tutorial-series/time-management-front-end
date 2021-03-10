import React from 'react'
import { useTaskState } from 'state-management/task'
import { HistoryList } from './history-list'

export type HistoryPageProps = {}
export const HistoryPage = (p: HistoryPageProps) => {
    const { historicTasks } = useTaskState()
    return (
        <div>
            <HistoryList tasks={historicTasks()} />
        </div>
    )
}