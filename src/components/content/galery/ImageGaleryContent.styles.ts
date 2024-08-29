import { Stack, styled, typographyClasses } from '@mui/material'

export const StyledClipPath = styled(Stack)(({ theme: { breakpoints } }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
  transition: 'all 300ms ease-in-out',
  marginLeft: '-100px',
  '& > img': {
    filter: 'opacity(0.35)',
    transition: 'all 500ms ease-in-out',
  },
  '&:hover': {
    '& > h2': {
      color: 'transparent',
    },
    '& > img': {
      filter: 'opacity(1)',
      transform: 'scale(1.15)',
      transition: 'all 500ms ease-in-out',
    },
  },
  '&.triangle-1, &.triangle-3, &.triangle-5': {
    clipPath: 'polygon(50% 98%, 0 0, 100% 0)',
    '& h2': {
      marginTop: 0,
      marginBottom: '75px',
    },
  },

  [`& .${typographyClasses.root}.titlePic`]: {
    position: 'absolute',
    fontWeight: 700,
    zIndex: '2',
    marginTop: '75px',
  },
}))
