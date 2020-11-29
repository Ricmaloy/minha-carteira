import React, {useMemo, useState} from 'react';
import emojis from '../../utils/emojis';
import Toggle from '../Toggle';

import UserImg from '../../assets/profile.jpg';

import { Container, Profile, Welcome, UserName, UserInfo, UserPhoto } from './styles';

import { useTheme } from '../../hooks/theme';

const MainHeader: React.FC = () => {

    const { toggleTheme, theme } = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length );
        return emojis[indice];
    }, []);
  
    return (
        <Container>
            <Toggle 
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />
            <Profile>
                <UserInfo>
                    {/* <Welcome>Olá, {emoji}</Welcome> */}
                    <Welcome>Bem Vindo,</Welcome>
                    <UserName>Ricardo Zamboni</UserName>
                </UserInfo>
                <UserPhoto src={UserImg} alt="User Profile Picture" />
            </Profile>
        </Container>
    );
        
}

export default MainHeader;