const formatTransactions = ( current: number, isGain: boolean): string => {
    let formatedCash = current.toLocaleString( 
        'pt-br',
        {
            style: 'currency',
            currency: 'BRL'
        }
        );

    if(isGain === true) {
        return `+ ${formatedCash}`;
    } else {
        return `- ${formatedCash}`;
    }
}

export default formatTransactions;