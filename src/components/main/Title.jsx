import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { spacing } from '../themes/generalTheme'
import Firulete from './util/Firulete'

const useStyles = makeStyles(() => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
  subtitle: {
    margin: `0 ${spacing(1)}px ${spacing(2)}px ${spacing(1)}px`,
  }
}))

const Title = ({ title }) => {
  const classes = useStyles()

  return (
    <div className={classes.title}>
      <Firulete>
        <Typography variant="h2" className={classes.subtitle}>
          {title}
        </Typography>
      </Firulete>
    </div>
  )
}

export default Title
