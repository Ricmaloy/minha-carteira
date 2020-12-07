import React from 'react';

import { Container, TransactionContent, Title } from './styles';

const TransactionsBox: React.FC = ( {children} ) => (
        <Container>
            <Title>Últimas transações</Title>
            <TransactionContent>
                { children }
            </TransactionContent>
        </Container>
    );

export default TransactionsBox;