import { Box } from "@material-ui/core"
import React from "react"
import Quadrant from "./quadrant"

export type HomePageProps = {}
const HomePage = (p: HomePageProps) => {
    return (
        <div>
            <Box display="flex" flexDirection="row">
                <Quadrant type="urgent-important" order={0} />
                <Quadrant type="notUrgent-important" order={1} />
            </Box>
            <Box display="flex" flexDirection="row">
                <Quadrant type="urgent-notImportant" order={2} />
                <Quadrant type="notUrgent-notImportant" order={3} />
            </Box>
        </div>
    )
}

export default HomePage
