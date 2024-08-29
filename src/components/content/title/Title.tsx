import { Stack, Typography } from '@mui/material'
import { Firulete } from '../index'

export const Title = ({ title }) => {
  return (
    <Stack justifyContent="center" mb={2}>
      <Firulete>
        <Typography variant="h2" mt={0} mr={1} mb={2} ml={1}>
          {title}
        </Typography>
      </Firulete>
    </Stack>
  )
}
