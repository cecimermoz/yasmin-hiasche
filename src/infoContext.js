/* import React, { useEffect, useState } from 'react';
import { getFirestore } from "./firebase";

export const SectionContext = React.createContext({});

const InfoContext = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [sectionsInfo, setSectionsInfo] = useState([]);
    
    useEffect(() => {
        console.log('antes que nada ',sectionsInfo)
    }, [sectionsInfo])

    useEffect(() => {
      setLoading(true);
      const db = getFirestore();
      const sectionsDB = db.collection('sections');
      sectionsDB.get().then( (query) => {
        query.size === 0 && console.log('No hay resultados en la Base de Datos')
        setSectionsInfo(query.docs.map( each => each.data()))
      }).catch( (error) => {
        console.log('Error al conectar con la BD ---> ', error)
      }).finally( () => setLoading(false));
    }, [])
      
    return(
        <>
        {sectionsInfo.length > 0 ? <div>Cargando...</div> :
        <SectionContext.Provider sectionsInfo={sectionsInfo} value={{sectionsInfo, loading}}>
            {children}
        </SectionContext.Provider>}
        </>
    )
};

export default InfoContext; */