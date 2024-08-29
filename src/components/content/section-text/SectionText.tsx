import { Typography } from '@mui/material'

export const SectionText = ({ sectionData }) => {
  const { content } = sectionData

  return (
    <Typography variant="body1">
      {content?.map((ph, i) => (
        <li style={{ listStyle: 'none' }} key={i}>
          {' '}
          {ph}{' '}
        </li>
      ))}
    </Typography>
  )
}
