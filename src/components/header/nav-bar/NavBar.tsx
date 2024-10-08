import * as React from 'react'
import { Box, Fab, Stack, Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import { WhatsApp } from '@mui/icons-material'
import { MenuHidden, Logo } from '../index'
import {
  ContainerWithoutPad,
  NavLink,
  StyledHeader,
  StyledToolbar,
  StyledWhatsappButton,
} from './NavBar.styles'

export const NavBar = (props) => {
  const { children, sections, windowSize, ...rest } = props
  const number = sections?.filter((s) => s.title === 'contacto')
  const goToWhatsapp = `https://api.whatsapp.com/send?phone=${number[0].whatsapp}&text=Hola,%20¿Me%20pasarías%20información%20de%20las%20clases?`

  const handleClick = (event, id) => {
    const idFormat = id.replace(/ /g, '-')
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${idFormat}`
    )
    setTimeout(() => {
      anchor && anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 400)
  }

  return (
    <React.Fragment>
      <StyledHeader>
        <CssBaseline />
        <StyledToolbar>
          {windowSize < 1125 ? (
            <>
              <MenuHidden sections={sections} />
              <Logo />
            </>
          ) : (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Logo />
              <Box>
                {sections?.map((link) => {
                  return (
                    <NavLink
                      showLabel
                      label={link.title}
                      key={link.title}
                      onClick={(e) => handleClick(e, link.title)}
                    />
                  )
                })}
              </Box>
            </Stack>
          )}
        </StyledToolbar>
      </StyledHeader>
      <ContainerWithoutPad>{children}</ContainerWithoutPad>

      <StyledWhatsappButton
        href={goToWhatsapp}
        target="_blank"
        rel="noreferrer"
        role="presentation"
      >
        <Fab color="primary" size="medium" aria-label="contact by whatsapp">
          <WhatsApp />
        </Fab>
      </StyledWhatsappButton>
    </React.Fragment>
  )
}
