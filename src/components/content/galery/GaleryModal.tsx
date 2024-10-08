/* eslint-disable react/prop-types */

import * as React from 'react'
import {
  ModalOverlay,
  StyledModal,
  StyledModalBody,
} from './GaleryModal.styles'
import { Box } from '@mui/material'

export const GalleryModal = (props) => {
  const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = props

  const handleKeyDown = (e) => {
    e.keyCode === 27 && closeModal(e)
    e.keyCode === 37 && hasPrev && findPrev(e)
    e.keyCode === 39 && hasNext && findNext(e)
  }

  React.useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown)
    return () => document.body.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Box id="galery-modal">
      <ModalOverlay onClick={closeModal} />
      <StyledModal>
        <StyledModalBody>
          <button
            className="modal-body-a modal-body-close"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
          >
            &times;
          </button>
          {hasPrev && (
            <button
              className="modal-body-a modal-body-both modal-body-prev"
              onClick={findPrev}
              onKeyDown={handleKeyDown}
            >
              &lsaquo;
            </button>
          )}
          {hasNext && (
            <button
              className="modal-body-a modal-body-both"
              onClick={findNext}
              onKeyDown={handleKeyDown}
            >
              &rsaquo;
            </button>
          )}
          <img src={src} alt="imagen de la galeria" />
        </StyledModalBody>
      </StyledModal>
    </Box>
  )
}
