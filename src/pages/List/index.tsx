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

import { useTheme } from '../../hooks/theme';

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
    category: string;
    dateFormated: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ( {match} ) => {

    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [frequencyFilterselected, setFrequencyFilterSelected] = useState(['recorrente','eventual']);

    const {theme} = useTheme();

    const  movimentType = match.params.type;

    const pageData = useMemo(() => {
        return movimentType === 'entry-balance' ?
        {
            title: 'Entradas',
            lineColor: String(theme.title) === 'dark' ? '#4E4AF0' : '#03BB85' , // color success
            data: gains,
            
        }
        : 
        {
            title: 'Saídas',
            lineColor: String(theme.title) === 'dark' ? '#E44C4E' : '#FF6961' , // color failure
            data: expenses,
        }
    },[movimentType, theme]);

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
        } catch {
            throw new Error('invalid nonth value. is accept 0 - 24');
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch {
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

            const recColor = theme.title === 'dark' ? '#4E41F0' : '#03BB85';
            const eveColor = theme.title === 'dark' ? '#E44C4E' : '#FF6961';

            return {
                id: uuidv4(), 
                description: item.description,
                amountFormated: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                category: item.category,
                dateFormated: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? recColor : eveColor,
                
            }
        });

       setData(formatedData);
       
    }, [pageData, monthSelected, yearSelected, data.length, frequencyFilterselected, theme]);

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