import { styled, typographyClasses } from '@mui/material'

export const StyledFooter = styled('footer')(
  ({ theme: { palette, spacing } }) => ({
    [`& .${typographyClasses.root}`]: {
      color: palette.ceci,
      textAlign: 'center',
      paddingBottom: spacing(2),

      '& a': {
        textDecoration: 'none',
        borderBottom: '2px solid transparent',
        color: '#6aeccf',
        paddingBottom: '5px',
      },

      '& a:hover': {
        color: palette.aqua,
        borderColor: palette.aqua,
      },
    },
  })
)
