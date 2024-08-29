import { Typography } from '@mui/material'

export const Section = ({ title, text }) => {
  let idTitle = title.replace(/ /g, '-')

  return (
    <section id={idTitle} title={title}>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="subtitle1">{text}</Typography>
    </section>
  )
}
