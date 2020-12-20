import React, { useState } from 'react';

import logoImg from '../../assets/logo2.svg';
import WalletLogo from '../../assets/Wallet1.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import { Container, ContainerContent, Panel, Login, LoginContent, Logo, Main, Form, Credits, InputField } from './styles';


const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth();

    return (
        <Container>
            <ContainerContent>
                <Panel>
                    <img src={WalletLogo} alt="Carteira" />
                    <p>" Tenha total controle dos seus ganhos e gastos, tudo isso na palma da sua mão e de graça. "</p>
                </Panel>
                <Login>
                    <LoginContent>
                    <Logo>
                        <h2>Minha Carteira</h2>
                        <img src={logoImg} alt="Minha Carteira" />
                    </Logo>
                    <Main>
                        <p>Entre agora mesmo</p>
                        <Form onSubmit={() => signIn(email,password)} >
                            <span>Email</span>
                            <InputField 
                                color="#424242"
                            >
                                <Input
                                    required
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </InputField>
                            <span>Senha</span>
                            <InputField
                                color="#424242"
                            >
                                <Input
                                    required
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </InputField>
                            <Button type="submit">Acessar</Button>
                        </Form>
                    </Main>
                    <Credits>Terms of use</Credits>
                    </LoginContent>
                </Login>
            </ContainerContent>
        </Container>
    );
        
}

export default SignIn;