import React from 'react';

import { Container, Title, SideLeft, Content, Button, SideRight } from './styles';

import CalendarIcon from '../../assets/calendar.svg';

interface ICalendarProps {
    events: string;
}

const RemindersNoteBox: React.FC<ICalendarProps> = ( {events} ) => (
    <Container>
        <SideLeft>
            <Title> Defina lembretes </Title>
            <Content>
                Você possui <strong> {events} evento(s)</strong> nesse mês. Adicione lembretes 
                para não esquecer nenhum evento importante. 
            </Content>
            <Button>adicionar lembrete</Button>
        </SideLeft>
        <SideRight>
            <img src={CalendarIcon} alt={CalendarIcon} /> 
        </SideRight>
    </Container>
);

export default RemindersNoteBox;