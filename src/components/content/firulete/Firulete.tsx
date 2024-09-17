import { Stack } from '@mui/material'
import { StyledFirulete } from './Firulete.styles'

export const Firulete = ({ children }) => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" gap={1}>
      <StyledFirulete />
      {children}
      <StyledFirulete className="right" />
    </Stack>
  )
}
