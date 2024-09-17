import { ImageGaleryContent } from '.'
import { GalleryGrid } from './Galery.styles'

export const Gallery = ({ categories }) => {
  const categoriesOrdered = categories?.sort((a, b) => {
    return a.order - b.order
  })

  return (
    <GalleryGrid>
      {categoriesOrdered.map((category, i) => {
        return <ImageGaleryContent category={category} index={i} key={i} />
      })}
    </GalleryGrid>
  )
}
