import { Task } from 'model/task'


type LocalStorageData = {
    'access-token': string,
    'default-theme': 'dark' | 'light',
    'tasks': Task[],
}

export const lsSet = <K extends keyof LocalStorageData>(k: K, v: LocalStorageData[K]) => {
    localStorage.setItem(k, JSON.stringify(v))
}

export const lsGet = <K extends keyof LocalStorageData>(k: K): LocalStorageData[K] | undefined => {
    const result = localStorage.getItem(k)
    return result ? JSON.parse(result) : undefined
}
