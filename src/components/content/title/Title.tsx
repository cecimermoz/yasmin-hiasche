import { Stack, Typography } from '@mui/material'
import { Firulete } from '../index'

export const Title = ({ title }) => {
  return (
    <Firulete>
      <Typography variant="h2">{title}</Typography>
    </Firulete>
  )
}
