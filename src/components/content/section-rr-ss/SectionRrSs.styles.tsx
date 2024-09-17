import { Stack, styled } from '@mui/material'

// root: {
//   '& .MuiTextField-root': {
//     margin: spacing(1),
//     width: '25ch',
//     '&:active, &:focus': {
//       outline: 'white',
//     },
//   },
//   '& label': {
//     color: palette.secondary.main,
//   },
//   '& .MuiOutlinedInput-notchedOutline': {
//     borderColor: palette.secondary.main,
//   },
//   '& .MuiButton-outlined': {
//     borderColor: palette.secondary.main,
//     color: palette.primary.main,
//     backgroundColor: palette.secondary.main,
//     marginTop: spacing(2),
//   },
// },

export const IconWrapper = styled(Stack)(({ theme: { breakpoints } }) => ({
  width: '90%',
  // margin: '20px auto',
  flexDirection: 'column',
  alignItems: 'center',
}))

export const StyledIcon = styled('a')(({ theme: { palette, spacing } }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: '0',
  padding: '20px',
  textDecoration: 'none',
  fontSize: `${spacing(2)}px`,
  color: palette.secondary.main,
  width: '100%',
  justifyContent: 'center',

  '&:hover': {
    color: palette.aqua,
    '& svg': {
      color: palette.aqua,
    },
  },

  '& span.span': {
    marginLeft: '10px',
  },
}))
