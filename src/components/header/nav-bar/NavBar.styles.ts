import { AppBar, Stack } from '@mui/material'
import { BottomNavigationAction, Toolbar, styled } from '@mui/material'
import { APPBAR_SIZE } from '../../../constants'

//'header'
export const StyledHeader = styled(AppBar)(({ theme: { spacing } }) => ({}))

export const StyledToolbar = styled(Toolbar)(
  ({ theme: { shape, spacing } }) => ({
    height: APPBAR_SIZE,
    zIndex: 100,
  })
)

export const NavLink = styled(BottomNavigationAction)(
  ({ theme: { palette, spacing } }) => ({
    textTransform: 'capitalize',
    alignSelf: 'stretch',
    color: palette.secondary.main,
    paddingBottom: spacing(1),
    marginBottom: spacing(-1),
    borderBottom: '1px solid transparent',
    transition: 'border-color 300ms ease-in-out',
    '& span': {
      fontSize: spacing(2),
      fontFamily: 'Nunito Sans, sans-serif',
      transition: 'color 300ms ease-in-out',
    },
    '&:hover': {
      color: palette.aqua,
      borderColor: palette.aqua,
      transition: 'border-color 300ms ease-in-out',
    },
  })
)

export const StyledWhatsappButton = styled('a')(({ theme: { spacing } }) => ({
  bottom: spacing(2),
  right: spacing(2),
  position: 'fixed',
}))

export const ContainerWithoutPad = styled(Stack)(
  ({ theme: { breakpoints, spacing } }) => ({
    display: 'grid',
    // placeItems: 'center',

    '& > *': {
      gridArea: '1 / 1',
    },

    '& > *:not(footer)': {
      placeSelf: 'center',
    },
  })
)
