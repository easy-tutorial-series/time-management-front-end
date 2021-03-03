import { unstable_createMuiStrictModeTheme as createMuiTheme, Theme } from "@material-ui/core"
import { Task } from 'state-management/task'


export const muiTheme = (type: Theme['palette']['type']) => createMuiTheme({
    palette: {
        type: type,
    },
    typography: {
        fontFamily: 'Roboto Slab',
    },
    overrides: {
        MuiTypography: {
            root: {
                display: 'flex',
                alignItems: 'center'
            }
        }
    }
})

export const colorMap: { [key in Task['type']]: string } = {
    "urgent-important": '#e8505b',
    "urgent-notImportant": '#f9d56e',
    "notUrgent-important": '#f3ecc2',
    "notUrgent-notImportant": '#14b1ab'
}

