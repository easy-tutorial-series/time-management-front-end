import { isTaskOnGoing, isTaskRejected, isTaskResolved, Task } from 'model/task'
import { max } from 'ramda'
import { atom, useRecoilState } from 'recoil'
import { isArray } from 'util/collection'
import { unixTimestampNow } from 'util/date'
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

    /* -------------------------------------------------------------------------- */
    /*                                    READ                                    */
    /* -------------------------------------------------------------------------- */
    const resolvedTasks = () => tasks.filter(isTaskResolved)
    const rejectedTasks = () => tasks.filter(isTaskRejected)
    const onGoingTasks = () => tasks.filter(isTaskOnGoing)
    const historicTasks = () => tasks.filter(t => isTaskRejected(t) || isTaskResolved(t))

    /* -------------------------------------------------------------------------- */
    /*                                    WRITE                                   */
    /* -------------------------------------------------------------------------- */
    const newTask = (type: Task["type"]) => {
        setTasks(tasks => {
            const id = tasks.map((t) => t.id).reduce(max, 0) + 1
            const newTask = {
                id,
                name: `task${id}`,
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

    const rejectTask = (id: Task["id"]) => {
        setTasks(tasks => {
            const result = tasks.map((t) => t.id === id ? { ...t, rejectedTime: unixTimestampNow() } : t)
            return result
        })
    }

    const resolveTask = (id: Task["id"]) => {
        setTasks(tasks => {
            const result = tasks.map((t) => t.id === id ? { ...t, resolvedTime: unixTimestampNow() } : t)
            return result
        })
    }

    return {
        newTask, updateTask, rejectTask, resolveTask, resolvedTasks, rejectedTasks, onGoingTasks, historicTasks
    }
}