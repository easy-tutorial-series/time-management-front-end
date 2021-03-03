import { CssBaseline, ThemeProvider } from "@material-ui/core"
import HomePage from "page/home"
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { useRecoilValue } from 'recoil'
import PrivateRouter from "route/private-router"
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
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <PrivateRouter>
                        <HomePage />
                    </PrivateRouter>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
