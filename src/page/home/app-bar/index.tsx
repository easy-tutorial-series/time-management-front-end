import { AppBar, Toolbar, Typography, Box } from "@material-ui/core"
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab"
import React from "react"
import { NightsStay, WbSunny } from "@material-ui/icons"
import { DataContainer } from "context"
import { ThemeType } from "context/theme"

export type CusAppBarProps = {}
const CusAppBar = (p: CusAppBarProps) => {
    const { themeMode, setThemeMode } = DataContainer.useContainer().themeMode
    const onToggleChange = (_: any, value: ThemeType) => setThemeMode(value)
    return (
        <AppBar position="static">
            <Toolbar>
                <Box width="100%" display="flex" flexDirection="row" justifyContent="space-between">
                    <Typography variant="h5">
                        Time Management Tool
                    </Typography>
                    <ToggleButtonGroup exclusive value={themeMode} onChange={onToggleChange}>
                        <ToggleButton value="dark">
                            <NightsStay />
                        </ToggleButton>
                        <ToggleButton value="light">
                            <WbSunny />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default CusAppBar
