import '@mui/material/styles'

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    primary: PaletteColor
    secondary: PaletteColor
    aqua: string
    ceci: string
    primary050: string
    ceci050: string
  }

  interface PaletteOptions {
    aqua: string
    ceci: string
    primary050: string
    ceci050: string
  }
}
