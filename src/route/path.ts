export const urlPath = {
    login: '/login',
    home: '/',
    history: '/history'
}

type PathKey = keyof typeof urlPath
export type PathValue = typeof urlPath[PathKey]