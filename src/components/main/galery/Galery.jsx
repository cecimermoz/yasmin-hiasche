/* eslint-disable react/prop-types */
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import ImageGaleryContent from './ImageGaleryContent'

const useStyles = makeStyles((theme) => ({
  galleryGrid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.down(915)]: {
      flexDirection: 'column',
      rowGap: '15px',
    },
    marginLeft: '100px',
  },
}))

const Gallery = ({ categories }) => {
  const { galleryGrid } = useStyles()
  const categoriesOrdered = categories?.sort((a, b) => {
    return a.order - b.order
  })
  
  return (
    <div className="gallery-container">
      <div className={`gallery-grid ${galleryGrid}`}>
        {categoriesOrdered.map((category, i) => {
          return (
            <ImageGaleryContent
              category={category}
              index={i}
              key={i}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
