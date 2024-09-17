import { useMediaQuery, useTheme } from '@mui/material'

export const useWidth = () => {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.only('xs'))
  const isSm = useMediaQuery(theme.breakpoints.only('sm'))
  const isMd = useMediaQuery(theme.breakpoints.only('md'))
  const isLg = useMediaQuery(theme.breakpoints.only('lg'))
  const isXl = useMediaQuery(theme.breakpoints.only('xl'))
  const isXxl = useMediaQuery(theme.breakpoints.only('xxl'))
  const is3Xl = useMediaQuery(theme.breakpoints.only('3xl'))
  if (isXs) return 'xs'
  if (isSm) return 'sm'
  if (isMd) return 'md'
  if (isLg) return 'lg'
  if (isXl) return 'xl'
  if (isXxl) return 'xxl'
  if (is3Xl) return '3xl'
  return null
}
