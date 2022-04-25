import React from 'react';
import SectionGalery from './SectionGalery';
import SectionLocation from './SectionLocation';
import SectionRrSs from './SectionRrSs';
import SectionSchedule from './SectionSchedule';
import SectionText from './SectionText';

const SwitchSections = ({ sectionData }) => {
    const listToMap = {
        'la escuela': <SectionText sectionData={sectionData} />,
        'clases': <SectionText sectionData={sectionData} />,
        'horarios': <SectionSchedule sectionData={sectionData} />,
        'medios de pago': <SectionText sectionData={sectionData} />,
        'formacion': <SectionText sectionData={sectionData} />,
        'biografia': <SectionText sectionData={sectionData} />,
        'galeria': <SectionGalery sectionData={sectionData} />,
        'ubicacion': <SectionLocation sectionData={sectionData} />,
        'contacto': <SectionRrSs sectionData={sectionData} />
    };

    return listToMap[sectionData.title];
};

export { SwitchSections };
