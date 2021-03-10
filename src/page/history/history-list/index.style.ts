import { colors, makeStyles } from '@material-ui/core'
import { colorMap } from 'style/mui-theme'

export const useStyles = makeStyles({
    avatar: {
        backgroundColor: colors.amber[50],
        borderColor: colors.grey[500],
        border: '1px solid'

    },
    resolved: {
        color: colorMap.success
    },
    rejected: {
        color: colorMap.fail
    }
})