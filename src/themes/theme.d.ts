import { Theme } from '@mui/material/styles'
// const theme = createTheme(baseTheme)

declare module '@mui/styles/createTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface (remove this line if you don't have the rule enabled)
  interface DefaultTheme extends Theme {}
}
