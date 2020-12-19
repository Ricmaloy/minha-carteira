import React from 'react';

import { MdAdd }  from 'react-icons/md';

import { Container, Header, Title, Content, Card, Infos, Account, Upper, Lower } from './styles';

type BankCard = {
    name: string;
    cardName: string;
    current: string;
    amount: string;
    account: string;
    cardLogo: string;
    cardTypeLogo ?: string;
    colorOne: string;
    colorTwo: string;
}

interface IBankCardsBoxProps {
    data: BankCard[];
}

const BankCardsBox: React.FC<IBankCardsBoxProps> = ( {data} ) => {

    return (
        <Container>
            <Header>
                <Title>Meus cartões</Title>
                <MdAdd/>
            </Header>
            <Content>
                {
                    data.map((BankCard) => (
                        <Card 
                            key={BankCard.cardName}
                            color1={BankCard.colorOne}
                            color2={BankCard.colorTwo}
                        >   
                            <Upper>
                                <div>
                                    <img src={BankCard.cardLogo} alt={BankCard.cardName} />      
                                    <p>{BankCard.name}</p> 
                                </div>
                                <img src={BankCard.cardTypeLogo} alt={BankCard.cardTypeLogo} />      
                            </Upper>
                            <Lower>
                                <Infos>
                                    <p>{BankCard.current}</p>
                                    <p>R$ {BankCard.amount}</p>
                                </Infos>
                                <Account>
                                    <p>{BankCard.account}</p>
                                </Account>
                            </Lower>
                        </Card>
                    ))
                }
            </Content>
            
        </Container>
    );
    }
export default BankCardsBox;