const formatWeekDay = ( weekDay: string): string => {

    const weekDayformated = weekDay  === 'Monday' ?  'Segunda-feira' :
    weekDay  === 'Tuesday' ?  'Terça-feira' : 
    weekDay  === 'Wednesday' ?  'Quarta-feira' :
    weekDay  === 'Thursday' ?  'Quinta-feira' :
    weekDay  === 'Friday' ?  'Sexta-feira'  :
    weekDay  === 'Saturday' ?  'Sábado' :
                            'Domingo';

    return  weekDayformated;
}

export default formatWeekDay;