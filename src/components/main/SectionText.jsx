import { Typography, makeStyles } from '@mui/material'
import React from 'react'

const useStyles = makeStyles(() => ({
  textLi: {
    listStyle: 'none',
  },
}))

const SectionText = ({ sectionData }) => {
  const { textLi } = useStyles()
  const { content } = sectionData

  return (
    <Typography variant="body1">
      {content?.map((ph, i) => (
        <li className={textLi} key={i}>
          {' '}
          {ph}{' '}
        </li>
      ))}
    </Typography>
  )
}

export default SectionText
