import HomePage from "page/home"
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import PrivateRouter from "route/private-router"
import "./App.css"
import LoginPage from "./page/login"
import { ThemeProvider } from "@material-ui/core"
import { muiTheme } from "style/mui-theme"
import { TaskDataContainer } from "context"

function App() {
    return (
        <ThemeProvider theme={muiTheme}>
            <TaskDataContainer.Provider>
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
            </TaskDataContainer.Provider>
        </ThemeProvider>
    )
}

export default App
