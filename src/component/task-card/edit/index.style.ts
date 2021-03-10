import { makeStyles } from "@material-ui/core"

export type StyleProps = { bgColor: string }
export const useStyles = makeStyles({
  card: {
    width: '300px',
    height: '200px',
    backgroundColor: (p: StyleProps) => p.bgColor
  }
})