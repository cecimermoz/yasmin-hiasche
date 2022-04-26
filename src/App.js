import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import generalTheme from './components/themes/generalTheme'
import { Context } from './context/dataContext'
import AppContainer from './modules/AppContainer/AppContainer'

function App() {
  return (
    <ThemeProvider theme={generalTheme}>
      <Context>
        <AppContainer />
      </Context>
    </ThemeProvider>
  )
}

export default App
