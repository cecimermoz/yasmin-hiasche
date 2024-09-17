import { Box, Stack, styled } from '@mui/material'

export const GridContainer = styled('div')(
  ({ theme: { breakpoints, spacing } }) => ({
    display: 'grid',
    gridTemplateColumns: '27% 73%',
    gap: spacing(1),
    rowGap: spacing(5),
    margin: spacing(2, 0, 3, 0),

    [breakpoints.up('sm')]: {
      gap: spacing(2),
      rowGap: spacing(5),
    },

    [breakpoints.up('md')]: {
      gap: spacing(2),
      rowGap: spacing(5),
      gridTemplateColumns: '2fr 5fr',
    },
  })
)

export const DayColumn = styled(Stack)(({ theme: { palette, spacing } }) => ({
  alignItems: 'flex-end',
  justifyContent: 'center',
}))

export const ClassColumn = styled('div', {
  shouldForwardProp: (prop) => prop !== 'rows',
})<{ rows: number }>(({ rows, theme: { spacing } }) => ({
  display: 'grid',
  gridTemplateRows: `repeat(${rows}, auto)`,
}))

export const ClassRow = styled(Stack)(
  ({ theme: { breakpoints, spacing } }) => ({
    flexDirection: 'row',
    gap: spacing(1),
    alignItems: 'center',
    textAlign: 'start',

    [breakpoints.up('sm')]: {
      gap: spacing(2),
    },

    [breakpoints.up('md')]: {
      gap: spacing(4),
    },
  })
)
