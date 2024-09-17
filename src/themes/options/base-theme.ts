import { createTheme, ThemeOptions } from '@mui/material/styles'

import baseShadows from './base-shadows'
import baseTypography from './base-typography'
import basePalette from './base-palette'

const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 375,
      sm: 744,
      md: 900,
      lg: 1280,
      xl: 1440,
      xxl: 1920,
      '3xl': 2560,
    },
  },
  palette: basePalette,
  shadows: baseShadows,
  spacing: 8,
  typography: baseTypography,
  shape: {
    borderRadius: 8,
  },
}

const baseTheme = createTheme(themeOptions)

export const { breakpoints, palette, typography, spacing, shape, shadows } =
  baseTheme

export default baseTheme
