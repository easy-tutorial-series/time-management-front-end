import { makeStyles } from "@material-ui/core"

export type StyleProps = {
  bgColor: string
}
export const useStyles = makeStyles({
  quadrant: {
    width: '48vw',
    height: '40vh',
    margin: '8px',
    border: '1px solid grey',
    borderRadius: '5px',
    boxShadow: '2px 2px 2px grey',
  },
  toolbar: {
    boxShadow: '2px 2px 2px grey',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: (p: StyleProps) => p.bgColor,
  }
})