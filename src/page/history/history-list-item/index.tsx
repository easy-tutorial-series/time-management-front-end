import { Avatar, ListItem } from '@material-ui/core'
import { Task } from 'model/theme'
import React from 'react'


export type HistoryListItemProps = {
    task: Task[]
}
export const HistoryListItem = (p: HistoryListItemProps) => {
    return (
        <ListItem>
            <Avatar>
                { }
            </Avatar>

        </ListItem>
    )
}