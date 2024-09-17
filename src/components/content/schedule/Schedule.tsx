import { Box, Divider, Grid, useTheme } from '@mui/material'
import {
  AllDaysWrapper,
  ClassColumn,
  ClassRow,
  ClassWrapper,
  DayCell,
  DayColumn,
  DayName,
  DayWrapper,
  DaysContainer,
  GridContainer,
  HourWrapper,
  Hours,
  RowWrapper,
} from './Schedule.styles'
import { useWidth, useSliceString } from '../../../hooks'
import React from 'react'
import styled from '@emotion/styled'

export const Schedule = ({ schedule, className }) => {
  const width = useWidth()
  const losWidth = !width

  const rows = schedule?.map((ph) => [
    {
      day: losWidth ? useSliceString(ph.day) : ph.day,
      hours: Object.entries(ph.hours),
      classType: Object.entries(ph.classType),
    },
  ])

  return (
    <GridContainer>
      {rows.map((dayData, index) => {
        const dayInfo = dayData[0]
        const rowSpan = dayInfo.hours.length // Definimos el alto en función de la cantidad de horas/clases

        return (
          <React.Fragment key={index}>
            <DayColumn>{dayInfo.day}</DayColumn>
            <ClassColumn rows={rowSpan}>
              {dayInfo.hours.map((hour, idx) => (
                <ClassRow key={idx}>
                  <Box p={0.5}>{hour[1]}</Box> {/* Hora */}
                  <Divider flexItem color="aqua" sx={{ width: 2 }} />
                  <Box p={0.5}>{dayInfo.classType[idx][1]}</Box>{' '}
                  {/* Tipo de clase */}
                </ClassRow>
              ))}
            </ClassColumn>
          </React.Fragment>
        )
      })}
    </GridContainer>
  )
}
