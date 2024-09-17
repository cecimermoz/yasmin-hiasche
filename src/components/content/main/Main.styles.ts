import { styled } from '@mui/material'
import { APPBAR_SIZE } from '../../../constants'

export const StyledMain = styled('main')(
  ({ theme: { breakpoints, spacing, palette } }) => ({
    color: palette.secondary.main,
    textAlign: 'center',
    maxWidth: '1200px',
    padding: spacing(2),
    marginTop: APPBAR_SIZE,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(3),
    alignItems: 'center',

    [breakpoints.up('md')]: {
      padding: spacing(4, 4, 0, 4),
    },
    [breakpoints.up('lg')]: {
      gap: spacing(6),
    },
  })
)
export const StyledSection = styled('section')(
  ({ theme: { breakpoints, spacing, palette } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(2),
  })
)
