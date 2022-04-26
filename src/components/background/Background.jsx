/* eslint-disable react/prop-types */
import { makeStyles } from '@material-ui/core'
import React from 'react'
import { breaks } from '../themes/generalTheme'

const useStyles = makeStyles((theme) => ({
  backgroundWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: '-1',
  },
  black: {
    background: '#0d0513',
    width: '100%',
    height: '100%',
    opacity: '1',
    position: 'absolute',
  },
  pic: {
    background:
            'url(https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/ANIMA-30.jpg?alt=media&token=3a8579b6-0485-4bde-b5f4-8aa9aea2b5b3)',
    width: '100%',
    height: '100%',
    backgroundSize: 'contain',
    backgroundPositionX: '25vw',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    opacity: '0.75',
    zIndex: '2',
    [theme.breakpoints.down(breaks[7])]: {
      backgroundPositionX: '0vw',
    },
  },
  gradient: {
    background:
            'linear-gradient(180deg, rgba(76, 31, 110, 1) 0%, rgba(141,13,152,1) 100%)',
    width: '100%',
    height: '100%',
    zIndex: '5',
    opacity: '0.6',
    position: 'absolute',
  },
}))

const Background = (props) => {
  const { isPicOn } = props
  const { backgroundWrapper, gradient, pic, black } = useStyles()

  return (
    <div className={backgroundWrapper}>
      <div className={gradient}></div>
      {isPicOn && <div className={pic}></div>}
      <div className={black}></div>
    </div>
  )
}

export default Background
