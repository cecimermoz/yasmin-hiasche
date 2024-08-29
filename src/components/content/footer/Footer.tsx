import { Typography } from '@mui/material'
import { StyledFooter } from './Footer.styles'

export const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="body1">
        Desarrollado por{' '}
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/ceciliamermoz/"
          target="_blank"
        >
          Cecilia Mermoz
        </a>
      </Typography>
    </StyledFooter>
  )
}
