import { createContainer } from "unstated-next"
import { useTask } from "./task"
import { useCusThemeMode } from "./theme"

const useDataContainer = () => ({
    task: useTask(),
    themeMode: useCusThemeMode()
})
export const DataContainer = createContainer(useDataContainer)
