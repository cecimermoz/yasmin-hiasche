import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { breakpoints } from '../../themes/generalTheme'

const useStyles = makeStyles(() => ({
  firulete: {
    background:
            'url(https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/firulete.png?alt=media&token=7a561207-af2d-4cd0-89be-968d9f5bbe32)',
    width: '40px',
    backgroundSize: '100%',
    marginTop: '5px',
    backgroundRepeat: 'no-repeat',
    visibility: 'hidden',
    [breakpoints.up(360)]: {
      visibility: 'visible',
    },
  },
  fRight: {
    transform: 'rotateY(180deg)',
  },
}))

const Firulete = ({children, customClasses}) => {
  const classes = useStyles()
  console.log('customClasses', customClasses)
  return (
    <>
      <div className={`${classes.firulete} ${classes.fLeft} ${customClasses ? customClasses.general : ''}`} />
      { children }
      <div className={`
        ${classes.firulete} 
        ${classes.fRight} 
        ${customClasses ? customClasses.general : ''} 
        ${customClasses ? customClasses.rigth : ''}
      `} />
    </>
  )
}

export default Firulete
