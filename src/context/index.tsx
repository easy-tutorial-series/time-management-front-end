import { createContainer } from "unstated-next"
import { Identity } from "type/utils"
import { useState } from "react"
import { max } from "ramda"

export type Task = {
    desc: string
    type:
        | "urgent-important"
        | "urgent-notImportant"
        | "notUrgent-important"
        | "notUrgent-notImportant"
} & Identity

export const useTask = () => {
        const [tasks, setTasks] = useState<Task[]>([])
    const newTask = (type: Task["type"]) => {
        const newTask = {
            id: tasks.map((t) => t.id).reduce(max, 0) + 1,
            name: "new",
            desc: "",
            type,
        }
        setTasks(tasks.concat(newTask))
    }

    const updateTask = (updatedTask: Task) => {
        const result = tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
        setTasks(result)
    }

    const deleteTask = (id: Task["id"]) => {
        console.log(id)
        const result = tasks.filter((t) => t.id !== id)
        setTasks(result)
    }

    return { tasks, deleteTask, updateTask, newTask }
}
export const TaskDataContainer = createContainer(useTask)
