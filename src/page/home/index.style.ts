import { makeStyles } from "@material-ui/core"
import { CSSProperties } from "@material-ui/core/styles/withStyles"

const quadrantToolBarBase: CSSProperties = {
  boxShadow: '2px 2px 2px grey',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
}
export type StyleProps = {
  quadrantOneColor: string
  quadrantTwoColor: string
  quadrantThreeColor: string
  quadrantFourColor: string
}
export const useStyles = makeStyles({
  quadrant: {
    width: '48vw',
    height: '48vh',
    margin: '8px',
    border: '1px solid grey',
    borderRadius: '5px',
    boxShadow: '8px 5px 5px grey'
  },
  quadrant1ToolBar: {
    backgroundColor: (p: StyleProps) => p.quadrantOneColor,
    ...quadrantToolBarBase
  },
  quadrant2ToolBar: {
    backgroundColor: (p: StyleProps) => p.quadrantTwoColor,
    ...quadrantToolBarBase
  },
  quadrant3ToolBar: {
    backgroundColor: (p: StyleProps) => p.quadrantThreeColor,
    ...quadrantToolBarBase
  },
  quadrant4ToolBar: {
    backgroundColor: (p: StyleProps) => p.quadrantFourColor,
    ...quadrantToolBarBase
  }
})