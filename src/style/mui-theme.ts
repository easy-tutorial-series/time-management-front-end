import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core"
import { Task } from "context/task"

export const muiTheme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto Slab'
  }
})

export const colorMap: { [key in Task['type']]: string } = {
  "urgent-important": '#e8505b',
  "urgent-notImportant": '#f9d56e',
  "notUrgent-important": '#f3ecc2',
  "notUrgent-notImportant": '#14b1ab'
}

