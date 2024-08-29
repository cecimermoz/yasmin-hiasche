import {
  BottomNavigationAction,
  Container,
  Toolbar,
  styled,
} from '@mui/material'

export const StyledHeader = styled('header')(({ theme: { breakpoints } }) => ({
  '&>header': {
    zIndex: 100,
  },
}))

export const StyledToolbar = styled(Toolbar)(({ theme: { spacing } }) => ({
  bottom: spacing(2),
  right: spacing(2),
  position: 'fixed',
}))

export const NavLink = styled(BottomNavigationAction)(
  ({ theme: { palette, spacing } }) => ({
    color: palette.secondary.main,
    '& span': {
      fontSize: ` ${spacing(2)}px`,
      fontFamily: 'Nunito Sans, sans-serif',
    },
  })
)

export const StyledWhatsappButton = styled('a')(({ theme: { spacing } }) => ({
  bottom: spacing(2),
  right: spacing(2),
  position: 'fixed',
}))

export const ContainerWithoutPad = styled(Container)(
  ({ theme: { spacing } }) => ({
    padding: '0 !important',
    maxWidth: 'none',
    position: 'relative',
  })
)
