import moment from 'moment'

export type UnixTimestamp = number
export const unixTimestampNow = () => moment().unix()

export const formatUnixTimestamp = (t: UnixTimestamp) => moment(t).format('YYYY-MM-DD / hh:mm')