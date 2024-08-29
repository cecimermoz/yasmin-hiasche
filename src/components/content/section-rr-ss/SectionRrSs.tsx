import { Facebook, Instagram, MailOutline, WhatsApp } from '@mui/icons-material'
import { IconWrapper, StyledIcon } from './SectionRrSs.styles'

export const SectionRrSs = ({ sectionData }) => {
  return (
    <IconWrapper>
      <StyledIcon href={sectionData.facebook} rel="noreferrer" target="_blank">
        <Facebook
        // color="secondary"
        // style={{ fontSize: 30 }}
        // alt={sectionData.facebook}
        // title="Facebook Estudio de Danzas Yasmin Hiasche"
        />
        <span className="span">Facebook</span>
      </StyledIcon>
      <StyledIcon href={sectionData.instagram} rel="noreferrer" target="_blank">
        <Instagram
        // color="secondary"
        // style={{ fontSize: 30 }}
        // alt={sectionData.instagram}
        // title="Instagram Estudio de Danzas Yasmin Hiasche"
        />
        <span className="span">Instagram</span>
      </StyledIcon>
      <StyledIcon
        href={`mailto:${sectionData.mail}?subject=Consulta%20de%20la%20Web`}
        target="_blank"
        rel="noreferrer"
      >
        <MailOutline
        // color="secondary"
        // style={{ fontSize: 30 }}
        // alt={sectionData.mail}
        // title="Enviar correo a Estudio de Danzas Yasmin Hiasche"
        />
        <span className="span">Enviar mail</span>
      </StyledIcon>
      <StyledIcon
        href={`https://api.whatsapp.com/send?phone=${sectionData.whatsapp}&text=Hola,%20¿Me%20pasarías%20información%20de%20las%20clases?`}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsApp
        // color="secondary"
        // style={{ fontSize: 30 }}
        // alt={sectionData.whatsapp}
        // title="Escribir Whatsapp a Estudio de Danzas Yasmin Hiasche"
        />
        <span className="span">Enviar Whatsapp</span>
      </StyledIcon>
    </IconWrapper>
  )
}
