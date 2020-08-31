import { createContainer } from "unstated-next"
import { Identity } from "type/utils"
import { useState } from "react"

export type Task = {
    desc: string
    type:
        | "urgent-important"
        | "urgent-notImportant"
        | "notUrgent-important"
        | "notUrgent-notImportant"
} & Identity

const useTask = () => {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 0,
            name: "first",
            desc: "",
            type: "urgent-notImportant",
        },
    ])
    const newTask = (type: Task["type"]) => {
        setTasks(
            tasks.concat({
                id: tasks.length,
                name: "new",
                desc: "",
                type,
            })
        )
    }

    const updateTask = (updatedTask: Task) => {
        const result = tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
        setTasks(result)
    }

    const deleteTask = (updatedTask: Task) => {
        const result = tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
        setTasks(result)
    }

    return { tasks, deleteTask, updateTask, newTask }
}
export const TaskDataContainer = createContainer(useTask)
