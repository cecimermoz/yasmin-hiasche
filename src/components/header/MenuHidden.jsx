import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@mui/material'
import { useTheme } from '@emotion/react'
import React, { useState } from 'react'
import { breaks } from '../themes/generalTheme'
import { ChevronLeft, ChevronRight, Menu } from '@mui/icons-material'

const drawerWidth = '100%'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    color: 'white',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  menuUl: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '90%',
    zIndex: '10',
  },
  fondoImg: {
    backgroundImage:
      'url(https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/12961308_836681903125720_2764887378204918362_o.jpg?alt=media&token=457bdb2c-4a7c-4f20-97cf-6c0826fecd88)',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '60%',
    backgroundColor: 'black',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '1',
    [theme.breakpoints.down(breaks[3])]: {
      backgroundSize: '100%',
    },
  },
  fondoColor: {
    backgroundColor: '#7928a8',
    opacity: '0.5',
    position: 'absolute',
    width: '100%',
    zIndex: '2',
    height: '100%',
  },
  menuButton: {
    padding: '8px 20px',
    width: '80%',
    margin: 'auto',
    background: 'rgba(255, 234, 241, 0.2)',
    //background: 'linear-gradient(90deg, rgba(76, 31, 110, 1) 0%, rgba(141,13,152,1) 100%)',
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
  },
  navBar: {
    zIndex: '10',
  },
  divider: {
    zIndex: '10',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
}))

const MenuHidden = ({ sections }) => {
  const classes = useStyles()
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

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={`${classes.drawerHeader} ${classes.navBar}`}>
          <IconButton onClick={handleDrawerClose} color="secondary">
            {theme.direction === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider className={classes.divider} />

        <List className={classes.menuUl}>
          {sections.map((obj, index) => (
            <ListItem key={index}>
              <Button
                onClick={(e) => handleClick(e, obj.title)}
                variant="contained"
                className={classes.menuButton}
              >
                <ListItemText primary={obj.title} />
              </Button>
            </ListItem>
          ))}
        </List>
        <div className={classes.fondoColor}></div>
        <div className={classes.fondoImg}></div>
      </Drawer>
    </>
  )
}

export default MenuHidden
