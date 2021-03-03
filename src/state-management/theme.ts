import { ThemeType } from 'model/task'
import { atom } from 'recoil'


const themeStateKey = 'themeStateKey'

export const themeState = atom<ThemeType>({
    key: themeStateKey,
    default: 'light'
})
