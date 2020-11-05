import React, { useMemo, useState } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import { Container, Content } from './styles';

import listOfMonths from '../../utils/months';

import happyImg from '../../assets/happy.svg';
import grinningImg from '../../assets/grinning.svg';
import sadImg from '../../assets/sad.svg';
import flushedImg from '../../assets/flushed.svg';


const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

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

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        });

    },[]);

    const totalBudget = useMemo(() => {
        let totalExp: number = 0, totalInc: number = 0, finalBudget: number = 0, eventualQuantity = 0, recurrentQuantity = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected) {
                try {
                    totalExp += Number(item.amount);

                    item.frequency === 'recorrente' ? recurrentQuantity++ : eventualQuantity++;

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

                    item.frequency === 'recorrente' ? recurrentQuantity++ : eventualQuantity++;

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
                        throw new Error('amountOutput is invalid. amountOutput must be valid number!');
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
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();

            return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
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
                    color="#4e41f0"
                    amount={totalBudget.finalBudget}
                    footerlabel="Atualizado com base nas entradas e saídas"
                    icon="dolar"
                />
                <WalletBox
                    title="Entradas"
                    color="#f7931b"
                    amount={totalBudget.totalInc}
                    footerlabel="Atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                />
                <WalletBox
                    title="Saídas"
                    color="#e44c4e"
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

                <PieChartBox data={relationExpVsGains} />

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