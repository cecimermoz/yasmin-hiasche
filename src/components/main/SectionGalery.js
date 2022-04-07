import Galery from './galery/Galery';

const SectionGalery = ({sectionData}) => {
    const { galleryCategories } = sectionData;
    return <Galery categories={galleryCategories} />;
}

export default SectionGalery;