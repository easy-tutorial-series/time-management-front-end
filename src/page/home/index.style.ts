import { makeStyles } from "@material-ui/core"
import { CSSProperties } from "@material-ui/core/styles/withStyles"

const quadrantToolBarBase: CSSProperties = {
  boxShadow: '2px 2px 2px grey',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
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
    backgroundColor: '#FFADAD',
    ...quadrantToolBarBase
  },
  quadrant2ToolBar: {
    backgroundColor: '#FFD6A5',
    ...quadrantToolBarBase
  },
  quadrant3ToolBar: {
    backgroundColor: '#FDFFB6',
    ...quadrantToolBarBase
  },
  quadrant4ToolBar: {
    backgroundColor: '#CAFFBF',
    ...quadrantToolBarBase
  }
})