export type LocalStorageKeyValuePairs =
  { key: 'access-token', value: string } |
  { key: 'default-theme', value: 'dark' | 'light' }

export const lsSet = (p: LocalStorageKeyValuePairs) => {
  localStorage.setItem(p.key, JSON.stringify(p.value))
}

export const lsGet = (k: LocalStorageKeyValuePairs['key']) => {
  const result = localStorage.getItem(k)
  return result ? JSON.parse(result) : undefined
}
