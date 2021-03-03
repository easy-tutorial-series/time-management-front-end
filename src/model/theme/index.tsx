import { Identity } from 'type/utils'

export type Task = {
    desc: string
    type:
    | "urgent-important"
    | "urgent-notImportant"
    | "notUrgent-important"
    | "notUrgent-notImportant"
} & Identity