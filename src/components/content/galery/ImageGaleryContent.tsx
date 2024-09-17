/* eslint-disable react/prop-types */
import { Typography } from '@mui/material'

import * as React from 'react'
import { GalleryModal } from './GaleryModal'
import { StyledClipPath } from './ImageGaleryContent.styles'

export const ImageGaleryContent = (props) => {
  const { category, index } = props
  const { album, name, previewPic } = category
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = (e) => {
    if (!e) return
    setIsModalOpen(false)
  }
  const findPrev = (e) => {
    if (!e) return
    setCurrentIndex(currentIndex - 1)
  }
  const findNext = (e) => {
    if (!e) return
    setCurrentIndex(currentIndex + 1)
  }

  return (
    <>
      <StyledClipPath onClick={openModal}>
        <Typography variant="h2" className="titlePic">
          {name}
        </Typography>
        <img
          src={previewPic}
          alt={`Abrir sección de "${name}" desde la galería`}
          width={250}
          height={200}
        />
      </StyledClipPath>
      {isModalOpen && (
        <GalleryModal
          closeModal={closeModal}
          findPrev={findPrev}
          findNext={findNext}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex + 1 < album.length}
          src={album[currentIndex]}
        />
      )}
    </>
  )
}
