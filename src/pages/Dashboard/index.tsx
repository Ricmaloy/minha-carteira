import React, { useMemo, useState } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import { Container, Content } from './styles';

import listOfMonths from '../../utils/months';

import happyImg from '../../assets/happy.svg';
import grinningImg from '../../assets/grinning.svg';
import sadImg from '../../assets/sad.svg';

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
        let totalExp: number = 0, totalInc: number = 0, finalBudget: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected) {
                try {
                    totalExp += Number(item.amount);
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
        } else if(totalBudget.finalBudget == 0){
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

    },  [totalBudget.finalBudget]);

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
                    title="saldo"
                    color="#4e41f0"
                    amount={totalBudget.finalBudget}
                    footerlabel="atualizado com base nas entradas e saídas"
                    icon="dolar"
                />
                <WalletBox
                    title="entradas"
                    color="#f7931b"
                    amount={totalBudget.totalInc}
                    footerlabel="atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                />
                <WalletBox
                    title="saídas"
                    color="#e44c4e"
                    amount={totalBudget.totalExp}
                    footerlabel="atualizado com base nas entradas e saídas"
                    icon="arrowDown"
                />
                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />
            </Content>
        </Container>
    );
        
}

export default Dashboard;