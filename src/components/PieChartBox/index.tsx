import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';
import sleepyImg from '../../assets/sleeping.svg';
import formatCurrency from '../../utils/formatCurrency';

import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles';

interface IPieChartProps {
    data: {
        name ?: string;
        value ?: number;
        percent ?: number;
        color : string;
    }[];
}

const data02 = [
    { 
      name: 'Recorrente', 
      percent: 75, 
      color: '#4960c9'
    },
    { 
      name: 'Eventual', 
      percent: 25, 
      color: '#4989c9' 
    },
];

const PieChartBox: React.FC<IPieChartProps> = ({data}) => (
    
    <Container>
        <SideLeft>
                <h2>Relação</h2>
            <LegendContainer>
                {
                    data.map((indicator) => (
                        <Legend key={indicator.name} color={indicator.color}>
                            <div>{indicator.percent}%</div>
                            <span>{indicator.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
        </SideLeft>

        <SideRight>
            {data[0].value === 0 && data[1].value === 0 ? 
            
            <div>
                <img src={sleepyImg} alt={sleepyImg} /> 
                <span>Tudo quieto por aqui !</span>
            </div>

            :
                        
            <ResponsiveContainer>
                <PieChart >
                    <Pie data={data} 
                         dataKey="value"
                         outerRadius={70}
                    >
                        {   
                            data.map((indicator) => (
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))

                        }
                    </Pie>

                    <Pie data={data02} 
                         dataKey="percent" 
                         innerRadius={80} 
                         outerRadius={100} 
                         label 
                    > 
                        {   
                            data02.map((indicator) => (
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))

                        }
                    </Pie>

                <Tooltip  formatter={(value) => formatCurrency(Number(value)) }/> 
                </PieChart>
            </ResponsiveContainer>

            }
        </SideRight>
    </Container>
);

export default PieChartBox;