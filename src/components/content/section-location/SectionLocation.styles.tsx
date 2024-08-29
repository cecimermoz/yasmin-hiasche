import { styled } from '@mui/material'

export const StyledText = styled('li')(({ theme: { spacing, palette } }) => ({
  listStyle: 'none',
  '&:first-of-type': {
    fontSize: '20px',
    fontWeight: 700,
    margin: '15px 0',
  },
}))
