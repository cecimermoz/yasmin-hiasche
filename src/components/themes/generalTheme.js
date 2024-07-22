import { createTheme } from '@mui/material'

const generalTheme = createTheme({
  breaks: [320, 400, 500, 600, 700, 800, 900, 1000, 1200, 1500, 1980],
  overrides: {
    MuiContainer: {
      root: {},
    },
  },
  palette: {
    primary: {
      main: '#7928a8',
    },
    secondary: {
      main: '#FFEAF1',
    },
    aqua: '#4ECDB0',
    ceci: '#f376ff',
    primary050: 'rgb(121, 40, 168, 0.55)',
    ceci050: 'rgba(243, 118, 255, 0.55)',
  },
  typography: {
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
  },
  spacing: [0, 8, 16, 24, 32, 48, 96],
})
const { palette, spacing, breakpoints, breaks } = generalTheme
export default generalTheme
export { palette, spacing, breakpoints, breaks }
