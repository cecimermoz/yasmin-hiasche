import {
  yasminAlbum,
  eventosAlbum,
  clasesAlbum,
  escuelaAlbum,
  egresadasAlbum,
} from '../../../assets/albums'
import { Gallery } from '../galery'

const galleryFormatted = (albumName) => {
  switch (albumName.name) {
    case 'Eventos':
      return {
        ...albumName,
        album: eventosAlbum.sort(() => 0.5 - Math.random()),
      }
    case 'Yasmin':
      return {
        ...albumName,
        album: yasminAlbum.sort(() => 0.5 - Math.random()),
      }
    case 'Escuela':
      return {
        ...albumName,
        album: escuelaAlbum.sort(() => 0.5 - Math.random()),
      }
    case 'Egresadas':
      return {
        ...albumName,
        album: egresadasAlbum.sort(() => 0.5 - Math.random()),
      }
    case 'Clases':
      return {
        ...albumName,
        album: clasesAlbum.sort(() => 0.5 - Math.random()),
      }
  }
}

export const SectionGalery = ({ sectionData }) => {
  // Recibo de firebase cada sección de la Galería
  const dataToMap = Object.entries(sectionData?.galleryCategories).map(
    (e) => e[1]
  )

  // Pero lo formateo para que el album de fotos me las tome de las que tengo en el proyecto
  const formatData = dataToMap.map((albumName) => galleryFormatted(albumName))

  return <Gallery categories={formatData} />
}
