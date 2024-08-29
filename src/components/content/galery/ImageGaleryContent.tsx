/* eslint-disable react/prop-types */
import { Typography } from '@mui/material'

import * as React from 'react'
import { GalleryModal } from './GaleryModal'
import { StyledClipPath } from './ImageGaleryContent.styles'

export const ImageGaleryContent = (props) => {
  const { category, index } = props
  const { album, name, previewPic } = category
  const [currentIndex, setCurrentIndex] = React.useState(null)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const openModal = () => {
    setCurrentIndex(0)
    setIsModalOpen(true)
  }
  const closeModal = (e) => {
    e !== undefined && e.preventDefault()
    setCurrentIndex(0)
    setIsModalOpen(false)
  }
  const findPrev = (e) => {
    e !== undefined && e.preventDefault()
    setCurrentIndex(currentIndex - 1)
  }
  const findNext = (e) => {
    e !== undefined && e.preventDefault()
    setCurrentIndex(currentIndex + 1)
  }

  return (
    <>
      <StyledClipPath className={`triangle-${index}`}>
        <Typography
          variant="h2"
          className="titlePic"
          onClick={() => openModal()}
        >
          {name}
        </Typography>
        <img
          src={previewPic}
          alt={`abrir sección de "${name}" desde la galería`}
          width={250}
          height={200}
          onClick={() => openModal()}
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
