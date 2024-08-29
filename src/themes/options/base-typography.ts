import type { TypographyOptions } from '@mui/material/styles/createTypography'

const baseTypography: TypographyOptions = {
  fontFamily: 'Nunito Sans, sans-serif',
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightBold: 700,
  h1: {
    fontSize: '35px',
    fontWeight: 700,
  },
  h2: {
    fontSize: '24px',
    fontWeight: 400,
    textTransform: 'uppercase',
  },
  h3: {
    fontSize: '16px',
    fontWeight: 700,
  },
  h4: {
    fontSize: '14px',
    fontWeight: 900,
  },
  h5: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '19px',
    textTransform: 'uppercase',
  },
  body1: {
    fontSize: '16px',
    fontWeight: 400,
  },
  body2: {
    fontSize: '14px',
    fontWeight: 400,
  },
}

export default baseTypography
