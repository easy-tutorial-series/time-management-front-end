type loginParams = {
  name: string
  pwd: string
}
type User = {
  id: number
  name: string
}
const fakeUser: User = {
  id: 1,
  name: 'Jack'
}
export const userLogin = (p: loginParams) => new Promise(res => res(fakeUser))