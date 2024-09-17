import { Stack, styled, typographyClasses } from '@mui/material'

export const StyledClipPath = styled(Stack)(({ theme: { spacing } }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
  transition: 'all 300ms ease-in-out',

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

  [`& .${typographyClasses.root}.titlePic`]: {
    position: 'absolute',
    fontWeight: 700,
    zIndex: '2',
    marginTop: spacing(9),
  },

  '&:nth-of-type(even)': {
    clipPath: 'polygon(50% 98%, 0 0, 100% 0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [`& .${typographyClasses.root}.titlePic`]: {
      marginTop: spacing(-9),
    },
  },
}))
