import { not, isNil } from 'ramda'
import { Identity } from 'util/type-utils'
import { UnixTimestamp } from 'util/date'

type TaskType =
    | "urgent-important"
    | "urgent-notImportant"
    | "notUrgent-important"
    | "notUrgent-notImportant"

export type Task = {
    desc: string
    type: TaskType
    resolvedTime?: UnixTimestamp
    rejectedTime?: UnixTimestamp
} & Identity

type ResolvedTask = Required<Omit<Task, 'rejectedTime'>>
type RejectedTask = Required<Omit<Task, 'resolvedTime'>>

export function isTaskRejected(t: Task): t is RejectedTask {
    return not(isNil(t.rejectedTime))
}

export function isTaskResolved(t: Task): t is ResolvedTask {
    return not(isNil(t.resolvedTime))
}

export const isTaskOnGoing = (t: Task) => isNil(t.rejectedTime) && isNil(t.resolvedTime)