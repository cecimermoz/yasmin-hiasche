import React from 'react'
import NavLink from '../styled-components/logo-style'
import { palette, spacing } from '../themes/generalTheme'
import Logo from './Logo'
import MenuHidden from './MenuHidden'
import { Fab, makeStyles } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import BottomNavigation from '@mui/material/BottomNavigation'
import Toolbar from '@mui/material/Toolbar'
import { WhatsApp } from '@mui/icons-material'

const useStyles = makeStyles(() => ({
  header: {
    '&>header': {
      zIndex: 100,
    },
  },
  buttons: {},
  toTopButton: {
    bottom: spacing(2),
    right: spacing(2),
    position: 'fixed',
  },
  whatsappButton: {
    bottom: spacing(2),
    right: spacing(2),
    position: 'fixed',
  },
  containerWithoutPad: {
    padding: '0 !important',
    maxWidth: 'none',
    position: 'relative',
  },
  adjustFlexBasis: {
    flexBasis: '100%',
    padding: 0,
    lineHeight: 0,
  },
  menuButton: {
    marginRight: spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbarSpaceBet: {
    justifyContent: 'space-between',
    padding: '0 20px',
    maxHeight: '55px',
  },
  navWrapper: {
    background: 'none',
    display: 'block',
    height: 'auto',
  },
  navLink: {
    color: palette.secondary.main,
  },
  navLinkSpan: {
    fontSize: `${spacing(2)}px`,
  },
  flex0: {
    flex: '0',
    textTransform: 'capitalize',
  },
}))

const NavBar = (props) => {
  const {
    header,
    containerWithoutPad,
    toolbarSpaceBet,
    navWrapper,
    flex0,
    whatsappButton,
  } = useStyles()
  const { children, sections, windowSize } = props
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
      <header className={header}>
        <CssBaseline />
        <AppBar>
          <Toolbar className={toolbarSpaceBet}>
            {windowSize < 1125 ? (
              <>
                <MenuHidden sections={sections} />
                <Logo />
              </>
            ) : (
              <>
                <Logo />
                <BottomNavigationAction className={navWrapper}>
                  {sections?.map((link) => {
                    return (
                      <NavLink
                        showLabel
                        label={link.title}
                        key={link.title}
                        className={flex0}
                        onClick={(e) => handleClick(e, link.title)}
                      />
                    )
                  })}
                </BottomNavigationAction>
              </>
            )}
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
      </header>
      <Container className={containerWithoutPad}>{children}</Container>

      <a
        href={goToWhatsapp}
        target="_blank"
        rel="noreferrer"
        role="presentation"
        className={whatsappButton}
      >
        <Fab color="primary" size="medium" aria-label="contact by whatsapp">
          <WhatsApp />
        </Fab>
      </a>
    </React.Fragment>
  )
}

export default NavBar
