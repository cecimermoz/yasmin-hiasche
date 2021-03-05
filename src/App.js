import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import NavBar from "./components/header/NavBar"


function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* NavBar should ambrace the content of the page, so it can sroll up with the Trigger  */}
      <NavBar>
      
        <p> asflakfladkndfa </p>
      </NavBar>
    
    </ThemeProvider>
  );
}

export default App;
