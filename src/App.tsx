import { ThemeProvider } from "@material-ui/core"
import { DataContainer } from "context"
import HomePage from "page/home"
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import PrivateRouter from "route/private-router"
import { muiTheme } from "style/mui-theme"
import "./App.css"
import LoginPage from "./page/login"

function App() {
    return (
        <ThemeProvider theme={muiTheme}>
            <DataContainer.Provider>
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
            </DataContainer.Provider>
        </ThemeProvider>
    )
}

export default App
