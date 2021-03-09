import CusAppBar from 'page/home/app-bar'
import React from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { lsGet } from "util/local-storage"
import { urlPath } from "./path"

export type PrivateRouterProps = {
    children: JSX.Element
} & RouteProps
const PrivateRoute = (p: PrivateRouterProps) => {
    const token = lsGet("access-token")

    const Content = () => {
        return <div>
            <CusAppBar />
            <Route path={p.path}>
                {p.children}
            </Route>
        </div>
    }

    return token ? <Content /> : <Redirect to={urlPath.login} />
}
export default PrivateRoute
