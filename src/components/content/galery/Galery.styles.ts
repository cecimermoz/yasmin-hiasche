import { Stack, styled } from '@mui/material'

export const GalleryGrid = styled(Stack)(
  ({ theme: { breakpoints, spacing } }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: spacing(12), // Se necesita para alinear al centro

    '& > div': {
      marginLeft: spacing(-12), // Se necesita para montar un triangulo sobre el de al lado
    },

    [breakpoints.down(915)]: {
      flexDirection: 'column',
      rowGap: spacing(2),
    },
  })
)
