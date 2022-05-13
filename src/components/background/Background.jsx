/* eslint-disable react/prop-types */
import { makeStyles } from '@material-ui/core'
import React from 'react'
import { breaks } from '../themes/generalTheme'
import BackgroundSlider from 'react-background-slider'

const useStyles = makeStyles((theme) => ({
  backgroundWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: '-1',
    '& > #ReactBackgroundSlider': {
      position: 'absolute',
      height: '100vh',
      zIndex: '2',
      width: '100%',
      '& > figure': {
        backgroundSize: 'contain',

      }
    }
  },
  black: {
    background: '#0d0513',
    width: '100%',
    height: '100%',
    opacity: '1',
    position: 'absolute',
  },
  pic: {
    backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/ANIMA-30.jpg?alt=media&token=3a8579b6-0485-4bde-b5f4-8aa9aea2b5b3)',
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
    background: 'linear-gradient(180deg, rgba(76, 31, 110, 1) 0%, rgba(141,13,152,1) 100%)',
    width: '100%',
    height: '100%',
    zIndex: '5',
    opacity: '0.6',
    position: 'absolute',
  },
}))

const Background = (props) => {
  const { isPicOn, previePics } = props
  const { backgroundWrapper, gradient, pic, black } = useStyles()
  const arrayBackgroundPics = [
    'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/16711626_10210666486833501_3082815882271337721_n.jpg?alt=media&token=212cd664-4f55-4984-b912-d540792dd229',
    'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/779.jpg?alt=media&token=a2ab745b-c5b0-4907-8987-0aedbad234fb',
    'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/ANIMA-30.jpg?alt=media&token=3a8579b6-0485-4bde-b5f4-8aa9aea2b5b3',
    'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/ANIMA-44.jpg?alt=media&token=cb84c3c3-0947-4183-81be-8b799dda5249',
    'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/760.jpg?alt=media&token=2abff369-79a7-4144-90aa-35ba0845c795',
    'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/455.jpg?alt=media&token=bf092a44-d603-4fbf-827f-0b372f642e3f',
    'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/72336011_10218312532899874_5572839878967689216_o.jpg?alt=media&token=8e8d5746-7035-47a2-969f-aa3f263277bd',
    'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/ANIMA-44.jpg?alt=media&token=f0745174-01c8-47a8-bf4e-1fe756fd9f36',
  ].sort(() => 0.5 - Math.random());

  return (
    <div className={backgroundWrapper}>
      <div className={gradient}></div>
      {isPicOn && <div className={pic} /> }
      {previePics && <BackgroundSlider images={arrayBackgroundPics} duration={4} transition={1} /> }
      <div className={black}></div>
    </div>
  )
}

export default Background
