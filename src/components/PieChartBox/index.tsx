import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';
import sleepyImg from '../../assets/sleeping.svg';
import formatCurrency from '../../utils/formatCurrency';

import { Container, SideLeft, LegendContainers, LegendContainer, Legend, SideRight } from './styles';

type Indicator = {
    name : string;
    value : number;
    percent : number;
    color : string;
};

interface IPieChartProps {
    data: Indicator[];
    freqData: Indicator[];
}

const PieChartBox: React.FC<IPieChartProps> = ({data, freqData}) => (

    <Container>
        <SideLeft>
                <h2>Relação</h2>
            <LegendContainers>
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
                <LegendContainer>
                    {
                        freqData.map((indicator) => (
                            <Legend key={indicator.name} color={indicator.color}>
                                <div>{indicator.percent}%</div>
                                <span>{indicator.name}</span>
                            </Legend>
                        ))
                    }
                </LegendContainer>
            </LegendContainers>
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

                    <Pie data={freqData} 
                         dataKey="value" 
                         innerRadius={80} 
                         outerRadius={100}
                    > 
                        {   
                            freqData.map((indicator) => (
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