import {
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import { Menu } from '@mui/icons-material'
import {
  FondoColor,
  FondoImg,
  MenuUL,
  StyledButton,
  StyledDrawer,
  StyledDrawerHeader,
} from './MenuHidden.styles'

export const MenuHidden = ({ sections }) => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)

  const handleClick = (event, id) => {
    handleDrawerClose()
    const idFormat = id.replace(/ /g, '-')
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${idFormat}`
    )
    setTimeout(() => {
      anchor && anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 400)
  }

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerOpen}
      >
        <Menu />
      </IconButton>

      <StyledDrawer
        variant="persistent"
        anchor="left"
        open={open}
        PaperProps={{
          sx: {
            width: '100%',
            color: 'white',
          },
        }}
      >
        <StyledDrawerHeader>
          <IconButton onClick={handleDrawerClose} color="secondary">
            {/* {theme.direction === 'rtl' ? <ChevronLeft /> : <ChevronRight />} */}
          </IconButton>
        </StyledDrawerHeader>
        <Divider />

        <MenuUL>
          {sections.map((obj, index) => (
            <ListItem key={index}>
              <StyledButton
                onClick={(e) => handleClick(e, obj.title)}
                variant="contained"
              >
                <ListItemText primary={obj.title} />
              </StyledButton>
            </ListItem>
          ))}
        </MenuUL>
        <FondoColor />
        <FondoImg />
      </StyledDrawer>
    </>
  )
}
