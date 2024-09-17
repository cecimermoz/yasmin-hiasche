import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    sm: true
    md: true
    lg: true
    xl: true
    xxl: true
    '3xl': true
  }
}
