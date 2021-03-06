import { Theme, unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core"



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

export const colorMap = {
    'urgent-important': '#e8505b',
    'urgent-notImportant': '#f9d56e',
    'notUrgent-important': '#f3ecc2',
    'notUrgent-notImportant': '#14b1ab',
    'success': '#2a9d8f',
    'fail': '#e76f51',
    'warning': '#f4a261'
}

