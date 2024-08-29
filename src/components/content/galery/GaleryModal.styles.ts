/* eslint-disable react/prop-types */
import { Box, styled } from '@mui/material'

export const ModalOverlay = styled(Box)(({ theme: { breakpoints } }) => ({
  position: 'fixed',
  zIndex: 200,
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  top: 0,
  left: 0,
}))

export const StyledModal = styled(Box)(({ theme: { breakpoints } }) => ({
  position: 'fixed',
  zIndex: 999,
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
}))

export const StyledModalBody = styled(Box)(({ theme: { breakpoints } }) => ({
  position: 'relative',

  '& img': {
    border: '5px solid #fff',
    maxWidth: '70vw',
    maxHeight: '60vw',

    [breakpoints.down(800)]: {
      maxWidth: '95vw',
      maxHeight: '95vw',
    },
    [breakpoints.up(1000)]: {
      maxHeight: '40vw',
    },
  },

  '& .modal-body-a': {
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
  '& .modal-body-close': {
    right: 0,
    top: 0,
    borderRadius: '0 0 0 5px',
  },
  '& .modal-body-both': {
    right: 0,
    top: 'calc(50% - 25px)',
    borderRadius: '5px 0 0 5px',
    height: '50px',
    lineHeight: '40px',
    fontSize: '60px',
  },
  '& .modal-body-prev': {
    left: 0,
    right: 'auto',
    borderRadius: '0 5px 5px 0',
  },
}))
