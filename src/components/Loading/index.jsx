import React from 'react'
import { makeStyles, CircularProgress } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: '160px',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}))

const Loading = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  )
}

export default Loading