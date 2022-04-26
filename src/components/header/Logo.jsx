/* eslint-disable react/prop-types */
import { makeStyles } from '@material-ui/core'
import React from 'react'
import logo from '../../assets/img/Estudio de DanzasYasmin Hiasche-1.png'

const useStyles = makeStyles(() => ({
  logo: {
    width: '155px',
  },
}))

const Logo = () => {
  const classes = useStyles()

  return (
    <img
      src={logo}
      className={classes.logo}
      title={'Estudio de Danzas Yasmin Hiasche'}
      alt={'Estudio de Danzas Yasmin Hiasche'}
    />
  )
}

export default Logo
