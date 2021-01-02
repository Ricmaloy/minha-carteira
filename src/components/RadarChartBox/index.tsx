import React from 'react';

import { Container, Title,  Legend, ContainerContent, SideLeft, SideRight } from './styles';

import formatCurrency from '../../utils/formatCurrency';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip} from 'recharts';

import { useTheme } from '../../hooks/theme';

type Indicator = {
    category : string;
    actualMonth : number;
    lastMonth: number;
    fullMark : number;
};

interface IRadarChartProps {
    data: Indicator[];
}

const RadarChartBox :React.FC<IRadarChartProps> = ({data}) => {

    const {theme} = useTheme();

    return (
    <Container>
        <Title>Gastos</Title>
        <ContainerContent>
            <SideLeft>
                <ResponsiveContainer>
                    <RadarChart data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="category" stroke={theme.colors.white}/>
                        <PolarRadiusAxis stroke={theme.colors.white} />
                        <Radar name="Ùltimo mês" dataKey="lastMonth" stroke="#959595" fill="#959595" fillOpacity={0.9}/>
                        <Radar name="Mês Atual" dataKey="actualMonth" stroke={theme.colors.info} fill={theme.colors.info} fillOpacity={0.9}/>
                        <Tooltip  formatter={(value) => formatCurrency(Number(value)) }/> 
                    </RadarChart>
                </ResponsiveContainer>
            </SideLeft>
            <SideRight>
                    <Legend color={theme.colors.info}>Mês atual</Legend>
                    <Legend color="#959595" >Mês anterior</Legend>
            </SideRight>
        </ContainerContent>
    </Container>
);}

export default RadarChartBox;