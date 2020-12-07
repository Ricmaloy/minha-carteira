const formatDay = ( date: string): string => {

    const dateFormated = new Date(date);
    const dateToday = new Date();

    if( dateFormated.getDate() === dateToday.getDate() ){
        return `Hoje`;
    }
    if( dateFormated.getDate() === (dateToday.getDate()-1) ){
        return `Ontem`;
    }


    const day = dateFormated.getDate() > 9
    ? dateFormated.getDate() : `0${dateFormated.getDate()}`;

    const month = dateFormated.getMonth() + 1  > 9
    ? dateFormated.getMonth() +1 : `0${dateFormated.getMonth()+1}`;


    return `${day}.${month} `;
}

export default formatDay;