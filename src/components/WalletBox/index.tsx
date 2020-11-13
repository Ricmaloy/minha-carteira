import React, { useMemo } from 'react';

import CountUp from 'react-countup';

import dolarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

import { Container } from './styles';


interface IWalletBoxProps {
    title: string;
    amount: number;
    footerlabel:string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    PrimaryColorGradient: string;
    SecondaryColorGradient: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
    title,
    amount,
    footerlabel,
    icon,
    PrimaryColorGradient,
    SecondaryColorGradient,
} ) => {

    const iconSelected = useMemo(() => {
        if(icon === 'dolar') 
            return dolarImg;
        else if(icon === 'arrowUp') 
            return arrowUpImg;
        else if(icon === 'arrowDown') 
            return arrowDownImg;
        else 
            return undefined;

    },[icon]);

    return (
        <Container 
            PrimaryColor={PrimaryColorGradient} 
            SecondaryColor={SecondaryColorGradient}
        >
            <span>{title}</span>
            <h1>
                <strong>R$</strong>
                <CountUp
                    end={amount}
                    separator="."
                    decimal=","
                    decimals={2}
                />
            </h1>
            <small>{footerlabel}</small>
            <img src={iconSelected} alt={title}/>
        </Container>
    );
        
}

export default WalletBox;