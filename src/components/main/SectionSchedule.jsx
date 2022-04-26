import React from 'react'
import Schedule from './Schedule'

const SectionSchedule = ({ sectionData }) => {
  const { title, listDays } = sectionData

  return <Schedule title={title} schedule={listDays} />
}

export default SectionSchedule
