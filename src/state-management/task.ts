import { Task } from 'model/theme'
import { max } from 'ramda'
import { atom, useRecoilState } from 'recoil'
import { isArray } from 'util/collection'
import { lsGet, lsSet } from 'util/local-storage'

const taskStateKey = 'taskStateKey'

const taskState = atom<Task[]>({
    key: taskStateKey,
    default: lsGet('tasks') ?? [],
    effects_UNSTABLE: [
        ({ onSet }) => {
            onSet(v => {
                if (isArray(v)) lsSet('tasks', v)
            })
        }
    ]
})

export const useTaskState = () => {
    const [tasks, setTasks] = useRecoilState(taskState)
    const newTask = (type: Task["type"]) => {
        setTasks(tasks => {
            const newTask = {
                id: tasks.map((t) => t.id).reduce(max, 0) + 1,
                name: "",
                desc: "",
                type,
            }
            return tasks.concat(newTask)
        })
    }

    const updateTask = (updatedTask: Task) => {
        setTasks(tasks => {
            const result = tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
            return result
        })
    }

    const deleteTask = (id: Task["id"]) => {
        setTasks(tasks => {
            const result = tasks.filter((t) => t.id !== id)
            return result
        })
    }

    return {
        newTask, updateTask, deleteTask, tasks
    }
}