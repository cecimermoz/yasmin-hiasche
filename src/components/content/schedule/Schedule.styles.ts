import { Stack } from '@mui/material'
import styled from 'styled-components'

export const AllDaysWrapper = styled(Stack)(() => ({
  flexDirection: 'column',
}))

export const RowWrapper = styled(Stack)(({ theme: { palette, spacing } }) => ({
  '&:not(:first-child)': {
    marginTop: '30px',
  },
}))

export const DayWrapper = styled('div')(({ theme: { palette, spacing } }) => ({
  textAlign: 'right',
  flexBasis: '30%',
  alignSelf: 'center',
}))

export const DayCell = styled('div')(({ theme: { palette, spacing } }) => ({
  margin: spacing(1, 0),
}))

export const HourWrapper = styled(Stack)(({ theme: { palette, spacing } }) => ({
  justifyContent: 'space-between',
  flexDirection: 'column',
  // padding: spacing(0, 2),
  // borderRight: `2px solid ${palette.aqua}`,
}))

export const ClassWrapper = styled(Stack)(
  ({ theme: { palette, spacing } }) => ({
    justifyContent: 'space-between',
    flexDirection: 'column',
    // paddingLeft: spacing(2),
    flexBasis: '70%',
    textAlign: 'left',
  })
)
