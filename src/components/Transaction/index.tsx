import React from 'react';

import { Container, Date, Description, Frequency, Category, Cash } from './styles'

interface ITransaction {
    date: string;
    title: string;
    frequency: string;
    category: string;
    categoryColor: string;
    amount: string;
    amountColor: string;
}

const Transaction : React.FC<ITransaction> = ({
    date,
    title,
    frequency,
    category,
    categoryColor,
    amount,
    amountColor
}) => (
    <Container>
        <Date>{date}</Date>
        <Description>{title}</Description>
        <Frequency>{frequency}</Frequency>
        <Category  Categorycolor={categoryColor} >{category}</Category>
        <Cash Amountcolor={amountColor} >{amount}</Cash>
    </Container>
);

export default Transaction;