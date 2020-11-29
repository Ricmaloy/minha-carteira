import React, { useState } from 'react';

import logoImg from '../../assets/logo.svg';

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
                <Panel></Panel>
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
                            <InputField>
                                <Input
                                    required
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </InputField>
                            <span>Password</span>
                            <InputField>
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