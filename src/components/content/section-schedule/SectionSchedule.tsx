import { Schedule } from '../schedule/Schedule'

export const SectionSchedule = ({ sectionData }) => {
  const { listDays } = sectionData

  return <Schedule schedule={listDays} className="" />
}
