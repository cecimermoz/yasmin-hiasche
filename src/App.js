import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import NavBar from "./components/header/NavBar";
import Main from './components/main/Main';


function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* NavBar should ambrace the content of the page, so it can sroll up with the Trigger  */}
      <NavBar>
        <Main />
      </NavBar>
    
    </ThemeProvider>
  );
}

export default App;
