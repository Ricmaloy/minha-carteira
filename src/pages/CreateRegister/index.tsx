import React, { useState, useMemo }  from 'react';

import Toggle from '../../components/Toggle';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import listOfCategories from '../../utils/categories';
import listOfFrequencies from '../../utils/frequencies';

import Button from '../../components/Button';


import {Container, Title, Content, InputField, ContentBox, Form } from './styles';

import SelectInput from '../../components/SelectInput';

const CreateRegister: React.FC = () => {

    const [isExit, setIsExit] = useState(true);
    const [registerTitle, setRegisterTitle] = useState<string>('');
    const [registerDate, setRegisterDate] = useState<string>('');
    const [registerValue, setRegisterValue] = useState<string>();
    const [registerCategory, setRegisterCategory] = useState<string>('');
    const [registerFrequency, setRegisterFrequency] = useState<string>('');
    const [registerDescription, setRegisterDescription] = useState<string>('');


    const categories = useMemo(() => {
        return listOfCategories.map((category, index) => {
            return {
                value: index + 1,
                label: category,
            }
        });

    },[]);

    const frequencies = useMemo(() => {
        return listOfFrequencies.map((frequency, index) => {
            return {
                value: index + 1,
                label: frequency,
            }
        });

    },[]);

    const handleChangeType = () => {
        setIsExit(!isExit);
    }

    return (
        <Container>
            <Form>
                <Content>
                    <Title>Tipo</Title>
                    <InputField>
                        <Toggle 
                            labelLeft="Saída"
                            labelRight="Entrada"
                            checked={isExit}
                            onChange={handleChangeType}
                        />
                    </InputField>
                </Content>

                <Content>
                    <Title>Título</Title>
                    <InputField>
                        <Input 
                            required
                            type="text"
                            onChange={(e) => setRegisterTitle(e.target.value)}
                        />
                    </InputField>
                </Content>

                <ContentBox>
                    <Content>
                        <Title>Data</Title>
                        <InputField>
                            <Input 
                                required
                                type="date"
                                onChange={(e) => setRegisterDate(e.target.value)}
                            />
                        </InputField>
                    </Content>

                    <Content>
                        <Title>Valor</Title>
                        <InputField>
                            <Input 
                                required
                                type="number"
                                onChange={(e) => setRegisterValue(e.target.value)}
                            />
                        </InputField>
                    </Content>

                    <Content>
                        <Title>Categoria</Title>
                        <InputField>
                            <SelectInput 
                                options={categories} 
                                onChange={(e) => setRegisterCategory(e.target.value)} 
                                defaultValue={registerCategory} 
                            />
                        </InputField>
                    </Content>

                    <Content>
                        <Title>Frequência</Title>
                        <InputField>
                            <SelectInput 
                                options={frequencies} 
                                onChange={(e) => setRegisterFrequency(e.target.value)} 
                                defaultValue={registerFrequency} 
                            />
                        </InputField>
                    </Content>
                </ContentBox>

                <Content>
                    <Title>Descrição</Title>
                    <Textarea 
                        required
                        onChange={(e) => setRegisterDescription(e.target.value)} 
                    />
                </Content>

                <Button type="submit">Cadastrar</Button>
            </Form>

        </Container>
    )
}

export default CreateRegister;