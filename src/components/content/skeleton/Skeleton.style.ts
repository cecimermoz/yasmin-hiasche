import { Box, styled } from '@mui/material'

export const SkeletonWrapper = styled(Box)(({ theme: { breakpoints } }) => ({
  display: 'grid',
  height: '100vh',
  '& > *': { gridArea: '1/1' },
}))
