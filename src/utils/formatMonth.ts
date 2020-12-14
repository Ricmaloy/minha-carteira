const formatMonth = ( month: string): string => {
    const monthformated = month  === 'January' ?  'Janeiro' :
                  month  === 'February' ?  'Fevereiro' : 
                  month  === 'March' ?  'Março' :
                  month  === 'April' ?  'Abril' :
                  month  === 'May' ?  'Maio'  :
                  month  === 'June' ?  'Junho' :
                  month  === 'July' ?  'Julho' :
                  month  === 'August' ?  'Agosto':
                  month  === 'September' ?  'Setembro': 
                  month  === 'October' ? 'Outubro': 
                  month  === 'November' ? 'Novembro': 
                                          'Dezembro'; 
    return `de ${monthformated}`;
}

export default formatMonth;