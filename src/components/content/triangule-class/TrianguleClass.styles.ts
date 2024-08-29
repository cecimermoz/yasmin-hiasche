import { Box, styled } from '@mui/material'

export const TrianWrapper = styled(Box)(({ theme: { breakpoints } }) => ({
  width: 200,
  minHeight: 200,
  '& > .trian1': {
    background: '#7D3A9E',
  },
  '& > .trian2': {
    background: '#4EB1AD',
  },
  '& > .trian3': {
    background: '#E3CBDC',
  },
}))
