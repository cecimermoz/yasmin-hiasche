import { Typography } from '@mui/material'
import { StyledText } from './SectionLocation.styles'

export const SectionLocation = ({ sectionData }) => {
  const { content } = sectionData

  return (
    <>
      <img
        width="100%"
        src="https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/Utilidades%2Fmap.jpeg?alt=media&token=25a7e51f-db2b-4356-8105-658f6eaf4b8c"
        alt="Dirección: Moldes 2141"
        title="Dirección: Moldes 2141"
      />
      <Typography variant="body1">
        {content?.map((ph, i) => (
          <StyledText key={i}> {ph} </StyledText>
        ))}
      </Typography>
    </>
  )
}
