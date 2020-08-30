import React from "react"
import { Box } from "@material-ui/core"
import { useStyles } from "./index.style"

export type HomePageProps = {}
const HomePage = (p: HomePageProps) => {
    const styles = useStyles()
    return (
        <div>
            <Box display="flex" flexDirection="row">
                <Box className={styles.quadrant}></Box>
                <Box className={styles.quadrant}></Box>
            </Box>
            <Box display="flex" flexDirection="row">
                <Box className={styles.quadrant}></Box>
                <Box className={styles.quadrant}></Box>
            </Box>
        </div>
    )
}
export default HomePage
