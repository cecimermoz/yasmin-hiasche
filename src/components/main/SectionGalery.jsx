/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { yasminAlbum, eventosAlbum, clasesAlbum, escuelaAlbum, egresadasAlbum } from '../../assets/albums';
import Galery from './galery/Galery';

const formatAlbum = (album, name, order,previewPic) => {
    return {
        album,
        name,
        order,
        previewPic
    };
};

const galleryCategories = () => {
    return {
        yasmin: formatAlbum(yasminAlbum.sort( () => .5 - Math.random() ), 'yasmin', 4, 'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/Portadas%2FYasmin.jpg?alt=media&token=46c11537-2492-4b74-a476-87ee3ac87d28'),
        eventos: formatAlbum(eventosAlbum.sort( () => .5 - Math.random() ), 'eventos', 2, 'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/Portadas%2FEventos.jpg?alt=media&token=0b08579c-e3fb-41b0-985a-7760cb040119'),
        clases: formatAlbum(clasesAlbum.sort( () => .5 - Math.random() ), 'clases', 0, 'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/Portadas%2FEventos.jpg?alt=media&token=0b08579c-e3fb-41b0-985a-7760cb040119'),
        escuela: formatAlbum(escuelaAlbum.sort( () => .5 - Math.random() ), 'la-escuela', 3, 'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/Portadas%2FLa%20escuela.jpeg?alt=media&token=6c985137-7dc2-4d47-b86f-1ed69f18f2c9'),
        egresadas: formatAlbum(egresadasAlbum.sort( () => .5 - Math.random() ), 'egresadas', 1, 'https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/Portadas%2FEgresadas.jpg?alt=media&token=c93330a0-38eb-4105-93e7-ad4e11ef4148')
    };
};

const SectionGalery = () => {
    return <Galery categories={galleryCategories()} />;
};

export default SectionGalery;
