/* eslint-disable react/prop-types */
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'
import GalleryModal from './GaleryModal'

const useStyles = makeStyles(() => ({
  clipPath: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    transition: 'all 300ms ease-in-out',
    marginLeft: '-100px',
    '& > img': {
      filter: 'opacity(0.35)',
      transition: 'all 500ms ease-in-out',
    },
    '&:hover': {
      '& > h2': {
        color: 'transparent',
      },
      '& > img': {
        filter: 'opacity(1)',
        transform: 'scale(1.15)',
        transition: 'all 500ms ease-in-out',
      },
    },
    '&.triangle-1, &.triangle-3, &.triangle-5': {
      clipPath: 'polygon(50% 98%, 0 0, 100% 0)',
      '& h2': {
        marginTop: 0,
        marginBottom: '75px',
      },
    },
  },
  titlePic: {
    position: 'absolute',
    fontWeight: 700,
    zIndex: '2',
    marginTop: '75px',
  },
  triangleForm_bg: (props) => ({
    backgroundImage: `url(${props.category.previewPic})`,
  }),
  triangularPic: {
    width: '250px',
    height: '200px',
  },
}))

const ImageGaleryContent = (props) => {
  const { category, index } = props
  const { album, name, previewPic } = category
  const { titlePic, clipPath, triangularPic } = useStyles(props)
  const [currentIndex, setCurrentIndex] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
    setCurrentIndex(currentIndex+1)
  }

  return (
    <>
      <div className={`${clipPath} triangle-${index}`}>
        <Typography
          variant="h2"
          className={titlePic}
          onClick={() => openModal()}
        >
          {name}
        </Typography>
        <img
          src={previewPic}
          alt={`abrir sección de "${name}" desde la galería`}
          className={triangularPic}
          onClick={() => openModal()}
        />
      </div>
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

export default ImageGaleryContent
