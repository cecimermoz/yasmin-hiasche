import { ThemeProvider } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import Background from './components/background/Background';
import NavBar from './components/header/NavBar';
import Footer from './components/main/Footer';
import Main from './components/main/Main';
import Skeleton from './components/main/skeleton/Skeleton';
import generalTheme from './components/themes/generalTheme';
import Context from './context/dataContext.jxs';
import AppContainer from './modules/AppContainer/AppContainer';

function App() {
	return (
		<ThemeProvider theme={generalTheme}>
			<Context>
				<AppContainer />
			</Context>
		</ThemeProvider>
	);
}

export default App;
