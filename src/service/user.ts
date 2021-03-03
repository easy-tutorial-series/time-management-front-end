import { Identity } from "type/utils"
import { lsSet } from "util/local-storage"

type loginParams = {
    name: string
    pwd: string
}
type User = Identity
const fakeUser: User = {
    id: 1,
    name: 'Jack'
}
export const userLogin = (p: loginParams) => new Promise(res => {
    lsSet('access-token', 'token')
    return res(fakeUser)
})