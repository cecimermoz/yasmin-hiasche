import { useTheme } from '@mui/material'
import {
  AllDaysWrapper,
  ClassWrapper,
  DayCell,
  DayWrapper,
  HourWrapper,
  RowWrapper,
} from './Schedule.styles'

export const Schedule = ({ schedule, className }) => {
  const theme = useTheme()
  const { breakpoints } = theme

  const queryStyles = {
    [breakpoints.up('sm')]: {
      marginLeft: '30px',
    },
    // [breakpoints.up('500px')]: {
    //   marginLeft: '60px',
    // },
    // [breakpoints.up('600px')]: {
    //   marginLeft: '95px',
    //   fontSize: '16px',
    // },
    [breakpoints.up('md')]: {
      marginLeft: '20%',
    },
    [breakpoints.up('lg')]: {
      marginLeft: '22%',
    },
  }
  const rows = schedule?.map((ph) => [
    {
      day: ph.day,
      hours: Object.entries(ph.hours),
      classType: Object.entries(ph.classType),
    },
  ])

  return (
    <AllDaysWrapper className={className} sx={{ queryStyles }}>
      {rows.map((row, i) => (
        <RowWrapper key={i}>
          <DayWrapper>
            <div>{row[0].day}</div>
          </DayWrapper>

          <HourWrapper>
            {row[0]?.hours?.map((eachHour, i) => (
              <DayCell key={`${i}-${eachHour}`}>{eachHour[1]}</DayCell>
            ))}
          </HourWrapper>

          <ClassWrapper>
            {row[0]?.classType?.map((eachClass, i) => (
              <DayCell key={`${i}-${eachClass}`}>{eachClass[1]}</DayCell>
            ))}
          </ClassWrapper>
        </RowWrapper>
      ))}
    </AllDaysWrapper>
  )
}
