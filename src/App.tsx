import { ThemeProvider, CssBaseline } from "@material-ui/core"
import { DataContainer } from "context"
import HomePage from "page/home"
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import PrivateRouter from "route/private-router"
import { muiTheme } from "style/mui-theme"
import LoginPage from "./page/login"
import "./App.css"

function App() {
    const { themeMode } = DataContainer.useContainer().themeMode
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
