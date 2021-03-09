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
import Logo from './Logo';
import MenuHidden from './MenuHidden';

const useStyles = makeStyles((theme) => ({
  bottomButton: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  containerWithoutPad: {
    padding: '0 !important',
  },
  adjustFlexBasis:{
    flexBasis:"100%",
    padding:0,
    lineHeight: 0,
  }
}));

const NavBar = (props) => {
  const classes = useStyles();
  const { children, window, sections } = props;
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
        <div onClick={handleClick} role="presentation" className={classes.bottomButton}>
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

  return (
    <React.Fragment>
      <header>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <Container className={classes.adjustFlexBasis}>
              <Logo/>
            </Container>
            <MenuHidden sections={sections}/>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
      </header>
      <Container className={classes.containerWithoutPad}>
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