import { createContainer } from "unstated-next"
import { useTask } from "./task"

const useDataContainer = () => ({
    task: useTask(),
})
export const DataContainer = createContainer(useDataContainer)
