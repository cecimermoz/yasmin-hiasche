import { styled } from '@mui/material'

export const BackgroundWrapper = styled('div')({
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: '-1',
  '& > #ReactBackgroundSlider': {
    position: 'absolute',
    height: 'calc(100vh - 64px)',
    zIndex: '2',
    width: '100%',
    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0))',
  },
})

export const Overlay = styled('div')({
  background: '#0d0513',
  width: '100%',
  height: '100%',
  opacity: '1',
  position: 'absolute',
})

export const StyledPic = styled('div')(({ theme: { breakpoints } }) => ({
  width: '100%',
  height: '100%',
  backgroundSize: 'contain',
  backgroundPositionX: '25vw',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  opacity: '0.75',
  zIndex: '2',
  [breakpoints.down(1000)]: {
    backgroundPositionX: '0vw',
  },
}))

export const StyledGradient = styled('div')(({ theme }) => ({
  background:
    'linear-gradient(180deg, rgba(76, 31, 110, 1) 0%, rgba(141,13,152,1) 100%)',
  width: '100%',
  height: '100%',
  zIndex: '5',
  opacity: '0.6',
  position: 'absolute',
}))
