/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Galery from './galery/Galery';

const SectionGalery = ({ sectionData }) => {
    const { galleryCategories } = sectionData;
    console.log('galleryCategories', galleryCategories);
    return <Galery categories={galleryCategories} />;
}

export default SectionGalery;
