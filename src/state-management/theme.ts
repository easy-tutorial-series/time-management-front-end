import { Theme } from '@material-ui/core'
import { atom } from 'recoil'

export type ThemeType = Theme['palette']['type']
const themeStateKey = 'themeStateKey'

export const themeState = atom<ThemeType>({
    key: themeStateKey,
    default: 'light'
})
