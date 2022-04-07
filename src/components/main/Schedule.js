import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { AllDaysWrapper, ClassWrapper, DayCell, DayWrapper, HourWrapper, RowWrapper } from '../styled-components/schedule-style';
import { breaks } from '../themes/generalTheme';

const useStyles = makeStyles((theme) => ({
  
  query: {
    [theme.breakpoints.up(breaks[1])]: {
      marginLeft: '30px',
    },
    [theme.breakpoints.up(breaks[2])]: {
      marginLeft: '60px',
    },
    [theme.breakpoints.up(breaks[3])]: {
      marginLeft: '95px',
      fontSize: '16px',
    },
    [theme.breakpoints.up(breaks[7])]: {
      marginLeft: '20%',
    },
    [theme.breakpoints.up(breaks[8])]: {
      marginLeft: '22%',
    },
  }
}));

const Schedule = ({schedule, className}) => {
  const {query} = useStyles();
  
  const rows = schedule?.map(ph => [
    { 
      day: ph.day, 
      hours: Object.entries(ph.hours), 
      classType: Object.entries(ph.classType) 
    }]
);

  return (

    <AllDaysWrapper className={`${query} ${className}`}>  
      {rows.map((row,i) => (
        <RowWrapper key={i}>

          <DayWrapper >
            <div >{row[0].day}</div>
          </DayWrapper>
          
          <HourWrapper >
            { row[0]?.hours?.map( (eachHour, i) => <DayCell key={`${i}-${eachHour}`}>{eachHour[1]}</DayCell>) }
          </HourWrapper>    

          <ClassWrapper >
            {row[0]?.classType?.map( (eachClass, i) => <DayCell key={`${i}-${eachClass}`}>{eachClass[1]}</DayCell>) }
          </ClassWrapper>    

        </RowWrapper>
      ))}
    </AllDaysWrapper>

    );
}

export default Schedule;