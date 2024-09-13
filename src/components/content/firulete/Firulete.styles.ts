import { styled } from '@mui/material'

export const StyledFirulete = styled('div')(
  ({ theme: { breakpoints, spacing } }) => ({
    background:
      'url(https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/firulete.png?alt=media&token=7a561207-af2d-4cd0-89be-968d9f5bbe32)',
    width: spacing(5),
    height: spacing(5),
    backgroundSize: '100%',
    marginTop: '5px',
    backgroundRepeat: 'no-repeat',
    visibility: 'hidden',
    [breakpoints.up(360)]: {
      visibility: 'visible',
    },

    '&.right': {
      transform: 'rotateY(180deg)',
    },
  })
)
