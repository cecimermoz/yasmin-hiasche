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
    borderRadius: 8,
    '& span': {
      fontSize: spacing(2),
      fontFamily: 'Nunito Sans, sans-serif',
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
    position: 'relative',
  })
)
