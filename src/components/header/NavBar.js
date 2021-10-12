import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PropTypes from 'prop-types';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Logo from './Logo';
import MenuHidden from './MenuHidden';
import { palette, spacing } from '../themes/generalTheme';
import { BottomNavigation } from '@material-ui/core';
import NavLink from '../styled-components/logo-style';

const useStyles = makeStyles(() => ({
  header: {
    '&>header': {
      zIndex: 100
    }
  },
  bottomButton: {
    position: 'fixed',
    bottom: spacing(2),
    right: spacing(2),
  },
  containerWithoutPad: {
    padding: '0 !important',
    maxWidth: 'none',
    position: 'relative',
  },
  adjustFlexBasis:{
    flexBasis:"100%",
    padding:0,
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
    maxHeight: '55px'
  },
  navWrapper:{
    background: 'none',
    display: 'block',
    height: 'auto'
  },
  navLink:{
    color: palette.secondary.main,
  },
  navLinkSpan:{
    fontSize: `${spacing(2)}px`
  },
  flex0:{
    flex: '0',
    textTransform: 'capitalize'
  }
}));

const NavBar = (props) => {
  const { header, bottomButton, containerWithoutPad, adjustFlexBasis, menuButton, title, toolbarSpaceBet, navWrapper, navLink, navLinkSpan, flex0 } = useStyles()
  const { children, window, sections, windowSize } = props;
  const ScrollTop = (props) => {
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={bottomButton}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </div>
      </Zoom>
    );
  }
  // Proptypes ----------------------------------
  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  // --------------------------- End of Proptypes
 
  const handleClick = (event, id) => {
    const idFormat = id.replace(/ /g,'-');
    const anchor = (event.target.ownerDocument || document).querySelector(`#${idFormat}`);
    setTimeout(() => {
      anchor && anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 400);
  }; 

  return (
    <React.Fragment>
      <header className={header}>
        <CssBaseline />
        <AppBar>
        <Toolbar className={toolbarSpaceBet}>
          { windowSize < 1100 ?
            <>
              <IconButton edge="start" className={menuButton} color="inherit" aria-label="menu">
                <MenuHidden sections={sections}/>
              </IconButton>
              <Logo/>
            </>
            :
            <>
              <Logo/>
              <BottomNavigation className={navWrapper}>
                {sections?.map((link)=>{
                  return <NavLink showLabel label={link.title} key={link.title} className={flex0} onClick={ e => handleClick(e, link.title) }/>
                })}
              </BottomNavigation>
            </>
          }

        </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
      </header>
      <Container className={containerWithoutPad}>
        {children}
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>

  );

}

export default NavBar;