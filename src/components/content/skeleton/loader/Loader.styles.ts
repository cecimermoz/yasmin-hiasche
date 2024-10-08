import { Box, styled } from '@mui/material'

export const StyledLoader = styled(Box)(({ theme: { breakpoints } }) => ({
  margin: '0 auto',
  position: 'relative',
  top: '45vh',
  width: '100px',
  height: '100px',
  borderRadius: '50px',
  background: 'linear-gradient(#1b9b74, #65e2d1, #f6ddfd)',
  animation: 'animate 0.7s linear infinite',

  '&:after': {
    content: `' '`,
    position: 'absolute',
    top: '10px',
    left: '10px',
    right: '10px',
    bottom: '10px',
    background: ' rgb(64 16 81)',
    borderRadius: '50px',
  },

  '@keyframes animate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}))
