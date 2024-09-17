import { Facebook, Instagram, MailOutline, WhatsApp } from '@mui/icons-material'
import { IconWrapper, StyledIcon } from './SectionRrSs.styles'

export const SectionRrSs = ({ sectionData }) => {
  return (
    <IconWrapper>
      <StyledIcon
        href={sectionData.facebook}
        rel="noreferrer"
        target="_blank"
        color="secondary"
        title="Facebook Estudio de Danzas Yasmin Hiasche"
      >
        <Facebook />
        <span className="span">Facebook</span>
      </StyledIcon>
      <StyledIcon
        href={sectionData.instagram}
        rel="noreferrer"
        target="_blank"
        color="secondary"
        title="Instagram Estudio de Danzas Yasmin Hiasche"
      >
        <Instagram />
        <span className="span">Instagram</span>
      </StyledIcon>
      <StyledIcon
        href={`mailto:${sectionData.mail}?subject=Consulta%20de%20la%20Web`}
        target="_blank"
        rel="noreferrer"
        color="secondary"
        title="Enviar correo a Estudio de Danzas Yasmin Hiasche"
      >
        <MailOutline />
        <span className="span">Enviar mail</span>
      </StyledIcon>
      <StyledIcon
        href={`https://api.whatsapp.com/send?phone=${sectionData.whatsapp}&text=Hola,%20¿Me%20pasarías%20información%20de%20las%20clases?`}
        target="_blank"
        rel="noreferrer"
        color="secondary"
        title="Escribir Whatsapp a Estudio de Danzas Yasmin Hiasche"
      >
        <WhatsApp />
        <span className="span">Whatsapp</span>
      </StyledIcon>
    </IconWrapper>
  )
}
