import { ThemeProvider } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import Background from './components/background/Background';
import NavBar from "./components/header/NavBar";
import Footer from './components/main/Footer';
import Main from './components/main/Main';
import Skeleton from './components/main/skeleton/Skeleton';
import generalTheme from './components/themes/generalTheme';
import { getFirestore } from "./firebase";


function App() {
    const [loading, setLoading] = useState(false);
    const [sectionsInfo, setSectionsInfo] = useState([]);
    const sectionOrdered = sectionsInfo?.sort((a, b) => { return a.order - b.order; });
    const [windowSize, setWindowSize] = useState();

    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize(window.innerWidth);
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); 
    useEffect(() => {
      setLoading(true);
        const db = getFirestore();
        const sectionsDB = db.collection('sections');
        sectionsDB.get()
        .then( (query) => {
          query.size === 0 && console.error('No hay resultados en la Base de Datos')
          setSectionsInfo(query.docs.map( each => each.data() ))
        })
        .catch( (error) => {
          console.error('Error al conectar con la BD ---> ', error);
        })
        .finally( () => {
          setTimeout(()=>{
            setLoading(false)
          },1200);
        });
    }, [])
    
  return (
    <ThemeProvider theme={generalTheme}>
      
    { 
      loading 
        ? <Skeleton />
        : sectionOrdered.length > 0 &&
          <NavBar sections={sectionOrdered} windowSize={windowSize}>
            <Background isPicOn/>
            <Main sectionsInfo={sectionOrdered}/>
            <Footer />
          </NavBar>
    }
      
    </ThemeProvider>
  );
}

export default App;

