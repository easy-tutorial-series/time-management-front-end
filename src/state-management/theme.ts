import { ThemeType } from 'model/theme'
import { atom } from 'recoil'


const themeStateKey = 'themeStateKey'

export const themeState = atom<ThemeType>({
    key: themeStateKey,
    default: 'light'
})
