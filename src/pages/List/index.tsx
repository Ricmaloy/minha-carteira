import React, {useMemo, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { Container, Content, Filters } from './styles';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';

interface IRouteParams {
    match: {
        params: {
            type: string,
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormated: string;
    frequency: string;
    dateFormated: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ( {match} ) => {

    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [frequencyFilterselected, setFrequencyFilterSelected] = useState(['recorrente','eventual']);

    const  movimentType = match.params.type;

    const pageData = useMemo(() => {
        return movimentType === 'entry-balance' ?
        {
            title: 'Entradas',
            lineColor: '#4E4AF0',
            data: gains,
            
        }
        : 
        {
            title: 'Saídas',
            lineColor:'#E44C4E',
            data: expenses,
        }
    },[movimentType]);

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        });

    },[]);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        const { data } = pageData;

        data.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year);
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        });

    },[pageData]);

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = frequencyFilterselected.findIndex(item => item === frequency);

        if(alreadySelected >= 0) {
            const filtered = frequencyFilterselected.filter(item => item !== frequency);
            setFrequencyFilterSelected(filtered);

        } else {
            setFrequencyFilterSelected((prev) => [...prev, frequency]);
        }
    }

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch(Error) {
            throw new Error('invalid nonth value. is accept 0 - 24');
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch(Error) {
            throw new Error('invalid nonth value. is accept integer number');
        }
    }

    useEffect(() => {

        const { data } = pageData;

        const filteredData = data.filter(item => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            
            return  month === monthSelected && year === yearSelected && frequencyFilterselected.includes(item.frequency);
        });

        const formatedData = filteredData.map(item => {

            return {
                id: uuidv4(), 
                description: item.description,
                amountFormated: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormated: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e' 
            }
        });

       setData(formatedData);
    }, [pageData, monthSelected, yearSelected, data.length, frequencyFilterselected]);

    return (
        <Container>
            <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
                <SelectInput 
                    options={months} 
                    onChange={(e) => handleMonthSelected(e.target.value)} 
                    defaultValue={monthSelected} 
                />
                <SelectInput 
                    options={years}  
                    onChange={(e) => handleYearSelected(e.target.value)} 
                    defaultValue={yearSelected} 
                />
            </ContentHeader>

        <Filters>
            <button 
            type="button"
            className={`tag-filter tag-filter-recurrent
            ${frequencyFilterselected.includes('recorrente') && 'tag-actived'}`}
            onClick={() => handleFrequencyClick('recorrente')}
            >
                Recorrentes    
            </button>
            <button 
            type="button"
            className={`tag-filter tag-filter-eventual
            ${frequencyFilterselected.includes('eventual') && 'tag-actived'}`}
            onClick={() => handleFrequencyClick('eventual')}
            >
                Eventuais   
            </button>
        </Filters>

        <Content>
            {
                data.map( item => (
                    <HistoryFinanceCard
                        key={item.id}
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dateFormated}
                        amount={item.amountFormated}
                    />
                ))
}
        </Content>

        </Container>
    );
        
}

export default List;