import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { HistoryPage } from 'page/history'
import HomePage from "page/home"
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { useRecoilValue } from 'recoil'
import { urlPath } from 'route/path'
import PrivateRoute from "route/private-router"
import { themeState } from 'state-management/theme'
import { muiTheme } from "style/mui-theme"
import "./App.css"
import LoginPage from "./page/login"

function App() {
    const themeMode = useRecoilValue(themeState)
    return (
        <ThemeProvider theme={muiTheme(themeMode)}>
            <CssBaseline />
            <BrowserRouter>
                <Switch>
                    <Route path={urlPath.login}>
                        <LoginPage />
                    </Route>
                    <PrivateRoute path={urlPath.home} exact>
                        <HomePage />
                    </PrivateRoute>
                    <PrivateRoute path={urlPath.history}>
                        <HistoryPage />
                    </PrivateRoute>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
