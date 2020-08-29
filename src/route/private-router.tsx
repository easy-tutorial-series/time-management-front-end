import React from "react"
import { Redirect } from "react-router-dom"
import { urlPath } from "./path"
import { lsGet } from "util/local-storage"

export type PrivateRouterProps = {
    children: JSX.Element
}
const PrivateRouter = (p: PrivateRouterProps) => {
    const token = lsGet("access-token")
    return <div>{token ? p.children : <Redirect to={urlPath.login} />}</div>
}
export default PrivateRouter
