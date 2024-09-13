/// <reference types="vite/client" />
import { Container, createRoot } from 'react-dom/client'
import { DataContext } from './context/dataContext'
import AppContainer from './modules/AppContainer'
import { ThemeProvider } from '@mui/material/styles'
import theme from './themes/theme'

const container = document.getElementById('root') as Container
const root = createRoot(container)
root.render(
  <ThemeProvider theme={theme}>
    <DataContext>
      <AppContainer />
    </DataContext>
  </ThemeProvider>
)
