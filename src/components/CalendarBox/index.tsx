import React from 'react';

import { Container, WeekDay, Date, Day, Month } from './styles';

interface ICalendarProps {
    dayText: string;
    dayNumber: string;
    month: string;
}

const CalendarBox: React.FC<ICalendarProps> = ({dayText, dayNumber, month}) => (
    <Container>
        <WeekDay>
            {dayText}
        </WeekDay>
        <Date>
            <Day>
                {dayNumber}
            </Day>
            <Month>
                {month}
            </Month>
        </Date>
    </Container>
);

export default CalendarBox;