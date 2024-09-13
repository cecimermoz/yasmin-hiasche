import {
  Button,
  Drawer,
  List,
  Stack,
  dividerClasses,
  styled,
} from '@mui/material'

export const StyledDrawer = styled(Drawer)(({ theme: { breakpoints } }) => ({
  width: '100%',
  flexShrink: 0,

  [`& .${dividerClasses.root}`]: {
    zIndex: '10',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
}))

export const StyledDrawerHeader = styled(Stack)(
  ({ theme: { spacing, mixins } }) => ({
    alignItems: 'center',
    flexDirection: 'row',
    padding: spacing(0, 1),
    justifyContent: 'flex-end',
    zIndex: 10,
    ...mixins.toolbar,
  })
)

export const FondoImg = styled('div')(({ theme: { breakpoints } }) => ({
  backgroundImage:
    'url(https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/12961308_836681903125720_2764887378204918362_o.jpg?alt=media&token=457bdb2c-4a7c-4f20-97cf-6c0826fecd88)',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '60%',
  backgroundColor: 'black',
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: '1',
  [breakpoints.down(600)]: {
    backgroundSize: '100%',
  },
}))

export const FondoColor = styled('div')(({ theme: { breakpoints } }) => ({
  backgroundColor: '#7928a8',
  opacity: '0.5',
  position: 'absolute',
  width: '100%',
  zIndex: '2',
  height: '100%',
}))

export const MenuUL = styled(List)(({ theme: { breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  height: '90%',
  zIndex: '10',
}))

export const StyledButton = styled(Button)(({ theme: { palette } }) => ({
  padding: '8px 20px',
  width: '80%',
  margin: 'auto',
  background: 'rgba(255, 234, 241, 0.2)',
  color: palette.secondary.main,
  border: `1px solid ${palette.secondary.main}`,
}))
