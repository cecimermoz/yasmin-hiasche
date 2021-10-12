import styled from 'styled-components';
import {palette, spacing, breakpoints} from '../themes/generalTheme';

const AllDaysWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: ${breakpoints.values.sm}px){
        /* background: black; */
    }

   
`;
const RowWrapper = styled.div`
    display: flex;
    &:not(:first-child){
        margin-top: 30px;
    }
`;

const DayWrapper = styled.div`
    text-align: right;
    flex-basis: 30%;
    align-self: center;
`;

const DayCell = styled.div`
   margin: ${spacing(1)}px 0;
`;

const HourWrapper = styled.div`
   
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    padding: 0 ${spacing(2)}px;
    border-right: 2px solid ${palette.aqua};
`;

const ClassWrapper = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    padding-left: ${spacing(2)}px;
    flex-basis: 70%;
    text-align: left;
`;

export {
    AllDaysWrapper,
    RowWrapper,
    DayWrapper,
    DayCell,
    HourWrapper,
    ClassWrapper,
};