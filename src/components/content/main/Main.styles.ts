import { styled } from '@mui/material'

export const StyledMain = styled('main')(({ theme: { spacing, palette } }) => ({
  padding: spacing(4),
  paddingBottom: 0,
  color: palette.secondary.main,
  textAlign: 'center',
  maxWidth: '1200px',
  margin: 'auto',

  '& section.mb': {
    margin: 'auto',
    marginBottom: spacing(5),
    maxWidth: 1200,
  },
}))
