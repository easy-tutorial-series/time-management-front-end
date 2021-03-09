import { AppBar, Box, Tab, Toolbar } from "@material-ui/core"
import { NightsStay, WbSunny } from "@material-ui/icons"
import AppsIcon from '@material-ui/icons/Apps'
import HistoryIcon from '@material-ui/icons/History'
import { ToggleButton, ToggleButtonGroup, ToggleButtonGroupProps } from "@material-ui/lab"
import React from "react"
import { useRecoilState } from 'recoil'
import { useRouter } from 'route/util'
import { themeState } from 'state-management/theme'
import { useStyles } from './index.style'

export type CusAppBarProps = {}
const CusAppBar = (p: CusAppBarProps) => {
    const [themeMode, setThemeMode] = useRecoilState(themeState)
    const router = useRouter()
    const styles = useStyles()
    const onToggleChange: ToggleButtonGroupProps['onChange'] = (_, value) => setThemeMode(value)

    return (
        <AppBar position="static">
            <Toolbar>
                <Box width="100%" display="flex" flexDirection="row" justifyContent="space-between">
                    <Box>
                        <Tab className={styles.tab} icon={<AppsIcon />} onClick={router.gotoHomePage} />
                        <Tab className={styles.tab} icon={<HistoryIcon />} onClick={router.gotoHistoryPage} />
                    </Box>
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
