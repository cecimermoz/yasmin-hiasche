import { Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      
        <header className="App-header">
          blebleble
        </header>
        <Button variant="outlined" color="primary">Click me</Button>
    
    </ThemeProvider>
  );
}

export default App;
