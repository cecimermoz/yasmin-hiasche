import { styled } from '@mui/material'
import { APPBAR_SIZE } from '../../../constants'
const top = APPBAR_SIZE / 8

export const StyledMain = styled('main')(({ theme: { spacing, palette } }) => ({
  padding: spacing(4),
  color: palette.secondary.main,
  textAlign: 'center',
  maxWidth: '1200px',
  margin: spacing(top, 'auto', 0, 'auto'),

  '& section.mb': {
    margin: 'auto',
    marginBottom: spacing(5),
    maxWidth: 1000,
  },
}))
