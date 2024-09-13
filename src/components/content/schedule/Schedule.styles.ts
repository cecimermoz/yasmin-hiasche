import { Stack, styled } from '@mui/material'

export const AllDaysWrapper = styled(Stack)(({ theme: { breakpoints } }) => ({
  flexDirection: 'column',

  [breakpoints.up('sm')]: {
    marginLeft: '30px',
  },
  [breakpoints.up(500)]: {
    marginLeft: '60px',
  },
  [breakpoints.up(600)]: {
    marginLeft: '95px',
    fontSize: '16px',
  },
  [breakpoints.up('md')]: {
    marginLeft: '20%',
  },
  [breakpoints.up('lg')]: {
    marginLeft: '22%',
  },
}))

export const RowWrapper = styled(Stack)(({ theme: { palette, spacing } }) => ({
  flexDirection: 'row',
  '&:not(:first-of-type)': {
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
  padding: spacing(0, 2),
  borderRight: `2px solid ${palette.aqua}`,
}))

export const ClassWrapper = styled(Stack)(
  ({ theme: { palette, spacing } }) => ({
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingLeft: spacing(2),
    flexBasis: '70%',
    textAlign: 'left',
  })
)
