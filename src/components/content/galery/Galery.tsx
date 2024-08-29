import { Box, Stack, makeStyles, styled } from '@mui/material'

import { ImageGaleryContent } from '.'

const GalleryGrid = styled(Stack)(({ theme: { breakpoints } }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'center',
  [breakpoints.down(915)]: {
    flexDirection: 'column',
    rowGap: '15px',
  },
  marginLeft: '100px',
}))

export const Gallery = ({ categories }) => {
  const categoriesOrdered = categories?.sort((a, b) => {
    return a.order - b.order
  })

  return (
    <Box className="gallery-container">
      <GalleryGrid className="gallery-grid">
        {categoriesOrdered.map((category, i) => {
          return <ImageGaleryContent category={category} index={i} key={i} />
        })}
      </GalleryGrid>
    </Box>
  )
}
