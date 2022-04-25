import React, { createContext, useEffect, useState } from 'react';
import { getFirestore } from '../firebase';

export const WebData = createContext(0);

// eslint-disable-next-line react/prop-types
export const Context = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [sectionsInfo, setSectionsInfo] = useState([]);
    const sectionOrdered = sectionsInfo?.sort((a, b) => { return a.order - b.order; });


    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const sectionsDB = db.collection('sections');
        sectionsDB.get()
            .then( (query) => {
                query.size === 0 && console.error('No hay resultados en la Base de Datos');
                setSectionsInfo(query.docs.map( each => each.data() ));
            })
            .catch( (error) => {
                console.error('Error al conectar con la BD ---> ', error);
            })
            .finally( () => setLoading(false));
    }, []);
    
    const value = {
        loading,
        sectionOrdered
    };

    return (
        <WebData.Provider value={value}>
            {children}
        </WebData.Provider>
    );
};