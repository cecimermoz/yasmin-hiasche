import { createMuiTheme } from '@material-ui/core/styles';

const generalTheme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root:{
      }
    }
  },
  palette: {
    primary: {
      main: '#7928a8',
    },
    secondary: {
      main: '#FFEAF1',
    }
  },
});

export default generalTheme;
