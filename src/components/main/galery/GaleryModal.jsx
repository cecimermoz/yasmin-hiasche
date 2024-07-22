/* eslint-disable react/prop-types */
import { Typography, makeStyles } from '@mui/material'

import React, { useEffect } from 'react'
import { breaks } from '../../themes/generalTheme'

const useStyles = makeStyles((theme) => ({
  modalOverlay: {
    position: 'fixed',
    zIndex: 200,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    left: 0,
  },
  modal: {
    position: 'fixed',
    zIndex: 999,
    //maxWidth: '800px',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
  },
  modalBody: {
    position: 'relative',
    '& img': {
      border: '5px solid #fff',
      maxWidth: '70vw',
      maxHeight: '60vw',
      [theme.breakpoints.down(breaks[5])]: {
        maxWidth: '95vw',
        maxHeight: '95vw',
      },
      [theme.breakpoints.up(breaks[7])]: {
        maxHeight: '40vw',
      },
    },
  },
  modalBodyA: {
    position: 'absolute',
    display: 'inline',
    color: 'black',
    textDecoration: 'none',
    lineHeight: '36px',
    fontSize: '30px',
    fontWeight: 'lighter',
    background: '#fff',
    borderRadius: '5px',
    height: '40px',
    width: '40px',
    textAlign: 'center',
    border: 'none',
    paddingBottom: '10px',
    cursor: 'pointer',
  },
  modalBodyClose: {
    right: 0,
    top: 0,
    borderRadius: '0 0 0 5px',
  },
  modalBodyBoth: {
    right: 0,
    top: 'calc(50% - 25px)',
    borderRadius: '5px 0 0 5px',
    height: '50px',
    lineHeight: '40px',
    fontSize: '60px',
  },
  modalBodyPrev: {
    left: 0,
    right: 'auto',
    borderRadius: '0 5px 5px 0',
  },
}))

const GalleryModal = (props) => {
  const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = props
  const {
    modalOverlay,
    modal,
    modalBody,
    modalBodyA,
    modalBodyClose,
    modalBodyBoth,
    modalBodyPrev,
  } = useStyles()
  const handleKeyDown = (e) => {
    console.log(e)
    console.log(hasNext)
    e.keyCode === 27 && closeModal(e)
    e.keyCode === 37 && hasPrev && findPrev(e)
    e.keyCode === 39 && hasNext && findNext(e)
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown)
    return () => document.body.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <div className={modalOverlay} onClick={closeModal}></div>
      <div className={modal}>
        <div className={modalBody}>
          <button
            href="#"
            className={`${modalBodyA} ${modalBodyClose}`}
            onClick={(e) => closeModal(e)}
            onKeyDown={handleKeyDown}
          >
            &times;
          </button>
          {hasPrev && (
            <button
              className={`${modalBodyA} ${modalBodyBoth} ${modalBodyPrev}`}
              onClick={(e) => findPrev(e)}
              onKeyDown={() => handleKeyDown}
            >
              &lsaquo;
            </button>
          )}
          {hasNext && (
            <button
              className={`${modalBodyA} ${modalBodyBoth}`}
              onClick={(e) => findNext(e)}
              onKeyDown={() => handleKeyDown}
            >
              &rsaquo;
            </button>
          )}
          <img src={src} alt="imagen de la galeria" />
        </div>
      </div>
    </div>
  )
}

export default GalleryModal
