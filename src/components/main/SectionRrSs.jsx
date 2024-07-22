import React from 'react'
import { makeStyles } from '@mui/material'

import { palette, spacing } from '../themes/generalTheme'
import { Facebook, Instagram, MailOutline, WhatsApp } from '@mui/icons-material'

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      margin: spacing(1),
      width: '25ch',
      '&:active, &:focus': {
        outline: 'white',
      },
    },
    '& label': {
      color: palette.secondary.main,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: palette.secondary.main,
    },
    '& .MuiButton-outlined': {
      borderColor: palette.secondary.main,
      color: palette.primary.main,
      backgroundColor: palette.secondary.main,
      marginTop: spacing(2),
    },
  },
  iconWrapper: {
    display: 'flex',
    width: '90%',
    margin: '20px auto',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    margin: '0',
    padding: '20px',
    textDecoration: 'none',
    fontSize: spacing(2),
    color: palette.secondary.main,
    width: '100%',
    justifyContent: 'center',
    '&:hover': {
      color: palette.aqua,
      '& svg': {
        color: palette.aqua,
      },
    },
  },
  span: {
    marginLeft: '10px',
  },
}))
//<a target="_blank" href={`mailto:${translations.email}`}>
const SectionRrSs = ({ sectionData }) => {
  const { iconWrapper, icon, span } = useStyles()

  return (
    <div className={iconWrapper}>
      <a
        href={sectionData.facebook}
        rel="noreferrer"
        target="_blank"
        className={icon}
      >
        <Facebook
          color="secondary"
          style={{ fontSize: 30 }}
          alt={sectionData.facebook}
          title="Facebook Estudio de Danzas Yasmin Hiasche"
        />
        <span className={span}>Facebook</span>
      </a>
      <a
        href={sectionData.instagram}
        rel="noreferrer"
        target="_blank"
        className={icon}
      >
        <Instagram
          color="secondary"
          style={{ fontSize: 30 }}
          alt={sectionData.instagram}
          title="Instagram Estudio de Danzas Yasmin Hiasche"
        />
        <span className={span}>Instagram</span>
      </a>
      <a
        href={`mailto:${sectionData.mail}?subject=Consulta%20de%20la%20Web`}
        target="_blank"
        rel="noreferrer"
        className={icon}
      >
        <MailOutline
          color="secondary"
          style={{ fontSize: 30 }}
          alt={sectionData.mail}
          title="Enviar correo a Estudio de Danzas Yasmin Hiasche"
        />
        <span className={span}>Enviar mail</span>
      </a>
      <a
        href={`https://api.whatsapp.com/send?phone=${sectionData.whatsapp}&text=Hola,%20¿Me%20pasarías%20información%20de%20las%20clases?`}
        target="_blank"
        rel="noreferrer"
        className={icon}
      >
        <WhatsApp
          color="secondary"
          style={{ fontSize: 30 }}
          alt={sectionData.whatsapp}
          title="Escribir Whatsapp a Estudio de Danzas Yasmin Hiasche"
        />
        <span className={span}>Enviar Whatsapp</span>
      </a>
    </div>
  )
}

export default SectionRrSs
