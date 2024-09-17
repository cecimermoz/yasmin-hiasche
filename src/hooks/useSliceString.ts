import { useMediaQuery, useTheme } from '@mui/material'

export const useSliceString = (text: string, size: number = 3) => {
  const newText = text.slice(0, size)
  return newText
}
