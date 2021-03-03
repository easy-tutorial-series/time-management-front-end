import { AppBar, Box, Toolbar, Typography } from "@material-ui/core"
import { NightsStay, WbSunny } from "@material-ui/icons"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab"
import React from "react"
import { useRecoilState } from 'recoil'
import { themeState, ThemeType } from 'state-management/theme'

export type CusAppBarProps = {}
const CusAppBar = (p: CusAppBarProps) => {
    const [themeMode, setThemeMode] = useRecoilState(themeState)

    const onToggleChange = (_: any, value: ThemeType) => setThemeMode(() => value)
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
