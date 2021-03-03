import { is } from 'ramda'

export const isArray = <T>(v: any): v is ArrayLike<T> => {
    return is(Array)(v)
}