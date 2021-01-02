import React, { useMemo, useState, useEffect, useCallback } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';
import Transactions from '../../components/Transaction';
import TransactionsBox from '../../components/TransactionsBox';
import RadarChartBox from '../../components/RadarChartBox';
import CalendarBox from '../../components/CalendarBox';
import RemindersNoteBox from '../../components/RemindersNoteBox';
import BankCardsBox from '../../components/BankCardsBox';

import { v4 as uuidv4 } from 'uuid';

import { useTheme } from '../../hooks/theme';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import transactions from '../../repositories/transactions';
import events from '../../repositories/events';
import bankCards from '../../repositories/bankCards';

import { Container, Content, Calendar } from './styles';

import formatTransactions from '../../utils/formatTransactions';
import formatDay from '../../utils/formatDay';
import listOfMonths from '../../utils/months';
import formatMonth from '../../utils/formatMonth';
import formatWeekDay from '../../utils/formatWeekDay';

import happyImg from '../../assets/happy.svg';
import grinningImg from '../../assets/grinning.svg';
import sadImg from '../../assets/sad.svg';
import flushedImg from '../../assets/flushed.svg';
import NuBank from '../../assets/NuBank.svg';
import BancoBrasil from '../../assets/BancoBrasil.svg';
import MasterCard from '../../assets/MasterCard.svg';
import MercadoLivre from '../../assets/MercadoLivre.svg';

interface IData {
    id: string;
    isGain: string;
    description: string;
    amountFormated: string;
    frequency: string;
    category: string;
    tagColor: string;
    dateFormated: string;
}

const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [allData, setAllData] = useState<IData[]>([]);

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

        [...expenses, ...gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year);
            }
        });
        
        uniqueYears.sort((a,b) => b - a);

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        });

    },[]);

    const calendarDate = useMemo(() => {

        var dateFormat = require("dateformat");
        var now = new Date();

        return {
            weekDay: formatWeekDay(dateFormat(now, "dddd")),
            day: dateFormat(now, "d"),
            month: formatMonth(dateFormat(now, " mmmm")),
        }

    },[]);

    const BankCards = useMemo(() => {

        
        return bankCards.map((card) => {

            const logo = card.cardLogo === 'NuBank' ? NuBank :
                         card.cardLogo === 'BancoBrasil' ? BancoBrasil :
                         MercadoLivre;

            const typeLogo = card.cardTypeLogo === 'MasterCard' ? MasterCard :
                             ' ';
                         

            return {
                name: card.name,
                cardName: card.cardName,
                current: card.current,
                amount: card.amount,
                account: card.account,
                cardLogo: logo,
                cardTypeLogo : typeLogo,
                colorOne: card.colorOne,
                colorTwo: card.colorTwo,
            }
        });
        
        //return bankCards;
    }, []);

    const totalBudget = useMemo(() => {
        let totalExp: number = 0, 
            totalInc: number = 0, 
            finalBudget: number = 0, 
            eventualQuantity: number = 0, 
            recurrentQuantity: number = 0, 
            recurrentTotal: number = 0, 
            eventualTotal: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected) {
                try {
                    totalExp += Number(item.amount);

                    if(item.frequency === 'recorrente') {
                        recurrentQuantity++;
                        recurrentTotal += Number(item.amount);
                    } else {
                        eventualQuantity++;
                        eventualTotal += Number(item.amount);
                    }

                } catch {
                    throw new Error('Inavalid amount! amount must be number.')
                }
            }
        });

       gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected) {
                try {
                    totalInc += Number(item.amount);

                    if(item.frequency === 'recorrente') {
                        recurrentQuantity++;
                        recurrentTotal += Number(item.amount);
                    } else {
                        eventualQuantity++;
                        eventualTotal += Number(item.amount);
                    }

                } catch {
                    throw new Error('Inavalid amount! amount must be number.')
                }
            }
        });

        finalBudget = totalInc - totalExp;

        return {
            totalExp,
            totalInc,
            finalBudget,
            recurrentQuantity,
            eventualQuantity,
            recurrentTotal,
            eventualTotal,
        }
    }, [monthSelected, yearSelected]);

    const message = useMemo(() => {

        if(totalBudget.finalBudget < 0){
            return {
                title: "Que triste!",
                description: "Neste mês, você gastou mais do que deveria!",
                footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
                icon: sadImg,
            }
        } else if ( totalBudget.totalInc === 0 && totalBudget.totalExp === 0){
            return {
                title: "Ops!",
                description: "Neste mês, não há registros de entradas ou saídas!",
                footerText: "Parece que você não fez nenhum registro no mês e ano selecionado.",
                icon: flushedImg,
            }
        } else if(totalBudget.finalBudget === 0){
            return {
                title: "Ufaa!",
                description: "Neste mês, você gastou exatamente o que ganhou!",
                footerText: "Tenha cuidado. No próximo mês tente poupar o seu dinheiro.",
                icon: grinningImg,
            }
        } else {
            return {
                title: "Muito bem!",
                description: "Sua carteira está positiva!",
                footerText: "Continue assim. Considere investir o seu saldo",
                icon: happyImg,
            } 
        }

    },  [totalBudget.finalBudget, totalBudget.totalInc, totalBudget.totalExp]);

    const relationEvents = useMemo(() => {

        let eventsCounter = 0;

        events.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected) {
                try {
                    eventsCounter++;
                } catch {
                    throw new Error('Inavalid amount! amount must be number.')
                }
            }
        });

        return eventsCounter >= 9 ? `${eventsCounter}` : `0${eventsCounter}`;

    },[monthSelected, yearSelected]);

    const relationExpVsGains = useMemo(() => {
        
        const total = totalBudget.totalInc + totalBudget.totalExp;
        const percentGains = Number(((Number(totalBudget.totalInc) / total) * 100).toFixed(1));
        const percentExpenses = Number(((Number(totalBudget.totalExp) / total) * 100).toFixed(1));

        const data = [   
            {
                name: "Entradas",
                value: totalBudget.totalInc,
                percent: percentGains ? percentGains : 0,
                color: '#f7931b',
            },
            {
                name: "Saídas",
                value: totalBudget.totalExp,
                percent: percentExpenses ? percentExpenses : 0,
                color: '#e44c4e',
            }          
        ];

        return data;

    }, [totalBudget.totalInc, totalBudget.totalExp]);

    const relationRecurrentVsEventual = useMemo(() => {

        const totalFrequency = totalBudget.eventualTotal + totalBudget.recurrentTotal;
        const percentFrequencyRecurrent = Number(((Number(totalBudget.recurrentTotal) / totalFrequency) * 100).toFixed(1));
        const percentFrequencyEventual = Number(((Number(totalBudget.eventualTotal) / totalFrequency) * 100).toFixed(1));

        const freqData = [
            {
                name: "Recorrentes",
                value: totalBudget.recurrentTotal,
                percent: percentFrequencyRecurrent ? percentFrequencyRecurrent : 0,
                color: '#4960c9',
            },
            {
                name: "Eventuais",
                value: totalBudget.eventualTotal,
                percent: percentFrequencyEventual ? percentFrequencyEventual : 0,
                color: '#4989c9',
            }
        ];
        
        return freqData;

    }, [totalBudget.recurrentTotal, totalBudget.eventualTotal]);

    const relationActualMonthVsLastMonth = useMemo(() => {

        // calculate actual month   
        let AMalimento: number = 0, 
            AMvestuario: number = 0, 
            AMlazer: number = 0, 
            AMfarmacia: number = 0, 
            AMsalario: number = 0, 
            AMoutro: number = 0, 
            AMhighest: number = 0;
            
            transactions.forEach(item => {
                const date = new Date(item.date);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
    
                if(month === monthSelected && year === yearSelected) {
                    try {
                        item.category === 'Alimento' ? AMalimento += Number(item.amount)
                        : item.category === 'Vestuário' ? AMvestuario += Number(item.amount)
                        : item.category === 'Lazer' ? AMlazer += Number(item.amount)
                        : item.category === 'Farmácia' ? AMfarmacia += Number(item.amount)
                        : item.category === 'Salário' ? AMsalario += Number(item.amount)
                        :  AMoutro += Number(item.amount)
    
                    } catch {
                        throw new Error('Inavalid amount! amount must be number.')
                    }
                }
            });

            Math.max(AMalimento, AMvestuario, AMlazer, AMfarmacia, AMsalario, AMoutro);

        // calculate past month
        let LMalimento: number = 0, 
            LMvestuario: number = 0, 
            LMlazer: number = 0, 
            LMfarmacia: number = 0, 
            LMsalario: number = 0, 
            LMoutro: number = 0, 
            LMhighest: number = 0;

            transactions.forEach(item => {
                const date = new Date(item.date);
                const year = date.getFullYear();
                const month = date.getMonth();
    
                if(month === monthSelected-2 && year === yearSelected) {
                    try {
                        item.category === 'Alimento' ? LMalimento += Number(item.amount)
                        : item.category === 'Vestuário' ? LMvestuario += Number(item.amount)
                        : item.category === 'Lazer' ? LMlazer += Number(item.amount)
                        : item.category === 'Farmácia' ? LMfarmacia += Number(item.amount)
                        : item.category === 'Salário' ? LMsalario += Number(item.amount)
                        :  LMoutro += Number(item.amount)
    
                    } catch {
                        throw new Error('Inavalid amount! amount must be number.')
                    }
                }
            });

            Math.max(LMalimento, LMvestuario, LMlazer, LMfarmacia, LMsalario, LMoutro);

        const data = [   
            {
                category: 'Alimento',
                actualMonth: AMalimento,
                lastMonth: LMalimento,
                fullMark: AMhighest > LMhighest ? AMhighest : LMhighest,
            },
            {
                category: 'Salário',
                actualMonth: AMsalario,
                lastMonth: LMsalario,
                fullMark: AMhighest > LMhighest ? AMhighest : LMhighest,
            },
            {
                category: 'Lazer',
                actualMonth: AMlazer,
                lastMonth: LMlazer,
                fullMark: AMhighest > LMhighest ? AMhighest : LMhighest,
            },
            {
                category: 'Farmácia',
                actualMonth: AMfarmacia,
                lastMonth: LMfarmacia,
                fullMark: AMhighest > LMhighest ? AMhighest : LMhighest,
            },
            {
                category: 'Vestuário',
                actualMonth: AMvestuario,
                lastMonth: LMvestuario,
                fullMark: AMhighest > LMhighest ? AMhighest : LMhighest,
            },
            {
                category: 'Outro',
                actualMonth: AMoutro,
                lastMonth: LMoutro,
                fullMark: AMhighest > LMhighest ? AMhighest : LMhighest,
            },         
        ];

        return data;

    }, [monthSelected, yearSelected]);

    const historyData = useMemo(() => {
        return listOfMonths.map((_, month) => {
            
            let amountEntry = 0;
            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if(gainMonth === month && gainYear === yearSelected){
                    try {
                        amountEntry += Number(gain.amount)
                    } catch {
                        throw new Error('amountEntry is invalid. amountEntry must be valid number!');
                    }
                }
            });

            let amountOutput = 0;
            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if(expenseMonth === month && expenseYear === yearSelected){
                    try {
                        amountOutput += Number(expense.amount)
                    } catch {
                        throw new Error('amount Output is invalid. amountOutput must be valid number!');
                    }
                }
            });

            return {
                monthNumber: month,
                month: listOfMonths[month].substr(0,3),
                amountEntry,
                amountOutput
            }
        })
        .filter(item => {
            const currentYear = new Date().getFullYear();

            return (yearSelected === currentYear) || (yearSelected < currentYear)
        });
    },[yearSelected]);

    const relationExpensesRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0, amountEventual = 0;

        expenses.filter((expense) => {
            const date = new Date(expense.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        })
        .forEach((expense) => {
            if(expense.frequency === 'recorrente'){
                return amountRecurrent += Number(expense.amount);
            }

            if(expense.frequency === 'eventual'){
                return amountEventual += Number(expense.amount);
            }
        });

        const total = amountEventual + amountRecurrent;
        const percentRecurrent = Number(((amountRecurrent/total) * 100).toFixed(1));
        const percentEventual =  Number(((amountEventual/total) * 100).toFixed(1));

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color: '#f7931b',
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                color: '#e44c4e',
            }
        ]

    },[monthSelected, yearSelected]);

    const relationGainsRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0, amountEventual = 0;

        gains.filter((gain) => {
            const date = new Date(gain.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        })
        .forEach((gain) => {
            if(gain.frequency === 'recorrente'){
                return amountRecurrent += Number(gain.amount);
            }

            if(gain.frequency === 'eventual'){
                return amountEventual += Number(gain.amount);
            }
        });

        const total = amountEventual + amountRecurrent;
        const percentRecurrent = Number(((amountRecurrent/total) * 100).toFixed(1));
        const percentEventual =  Number(((amountEventual/total) * 100).toFixed(1));

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color: '#f7931b',
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                color: '#e44c4e',
            }
        ]

    },[monthSelected, yearSelected]);

    const handleMonthSelected = useCallback((month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch {
            throw new Error('invalid nonth value. is accept 0 - 24');
        }
    },[]);

    const handleYearSelected = useCallback((year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch {
            throw new Error('invalid nonth value. is accept integer number');
        }
    },[])
    
    const {theme} = useTheme();

    useEffect(() => {
        const data = transactions;

        const filteredData = data.filter(item => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            
            return  month === monthSelected && year === yearSelected;
        });

        const formatedData = filteredData.map(item => {

            let color;
            item.category === 'Alimento' ? color = '#2574A0' 
            : item.category === 'Vestuário' ? color = '#FF4040'
            : item.category === 'Lazer' ? color = '#FF9C28'
            : item.category === 'Salário' ? color = '#0F8645'
            : item.category === 'Farmácia' ? color = '#22BADB'
            : color = '#C05E02';

    
            return {
                id: uuidv4(), 
                isGain: item.isGain,
                description: item.description,
                amountFormated: formatTransactions(Number(item.amount), item.isGain ==='true' ? true : false),
                frequency: item.frequency,
                category: item.category,
                dateFormated: formatDay(item.date),
                tagColor: color, 
            }
        });

       setAllData(formatedData);

    },[monthSelected, yearSelected, allData.length, theme]);

    
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#f7931b">
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

            <Content>
                <WalletBox
                    title="Saldo"
                    PrimaryColorGradient={theme.colors.primaryGradient}
                    SecondaryColorGradient={theme.colors.secondaryGradient}
                    amount={totalBudget.finalBudget}
                    footerlabel="Atualizado com base nas entradas e saídas"
                    icon="dolar"
                />
                <WalletBox
                    title="Entradas"
                    PrimaryColorGradient="#FF8008"
                    SecondaryColorGradient="#FFC837"
                    amount={totalBudget.totalInc}
                    footerlabel="Atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                />
                <WalletBox
                    title="Saídas"
                    PrimaryColorGradient="#990000"
                    SecondaryColorGradient="#FF0000"
                    amount={totalBudget.totalExp}
                    footerlabel="Atualizado com base nas entradas e saídas"
                    icon="arrowDown"
                />
                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

                <PieChartBox data={relationExpVsGains} freqData={relationRecurrentVsEventual} />

                <BankCardsBox data={BankCards} />

                <TransactionsBox>
                {   
                    allData.map( item => (
                        <Transactions
                            key={item.id}
                            date={item.dateFormated}
                            title={item.description}
                            frequency={item.frequency}
                            category={item.category}
                            categoryColor={item.tagColor}
                            amount={item.amountFormated}
                            amountColor={item.isGain === 'true' ? '#03BB85' : '#ff6363'}
                        />
                    ))
                }
                </TransactionsBox>

                <RadarChartBox data={relationActualMonthVsLastMonth}/>


                <Calendar>
                    <CalendarBox 
                        dayText={calendarDate.weekDay}
                        dayNumber={calendarDate.day}
                        month={calendarDate.month}
                    />

                    <RemindersNoteBox events={relationEvents} />
                </Calendar>

                <HistoryBox
                    data={historyData}
                    lineColorAmountEntry="#f7931b"
                    lineColorAmountOutput="#e44c4e"
                />

                <BarChartBox 
                    title="Entradas"
                    data={relationGainsRecurrentVersusEventual}
                />

                <BarChartBox 
                    title="Saídas"
                    data={relationExpensesRecurrentVersusEventual}
                />


            </Content>
        </Container>
    );
        
}

export default Dashboard;