import React, {useState} from 'react';
import logoImg from '../../assets/logo.svg';
import Toggle from '../Toggle';

import { Container, Header, LogImg, MenuContainer, MenuItemLink, MenuItemButton, Title, ToggleMenu, ThemeToggleFooter } from './styles';
import { MdDashboard,MdAccountBalanceWallet ,MdArrowDownward, MdArrowUpward, MdExitToApp, MdMenu, MdClose} from 'react-icons/md';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

const Aside: React.FC = () => {

    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();
    
    const [ toggleMenuIsOpened, setToggleMenuIsOpened ] = useState(false);
    const [ darkTheme, setDarkTheme ] = useState(() => theme.title === 'dark' ? true : false );


    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened)
    }
    
    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    return (
        <Container 
            menuIsOpen={toggleMenuIsOpened}
        >
            <Header>

                <ToggleMenu onClick={handleToggleMenu}>
                    {toggleMenuIsOpened ? <MdClose/> : <MdMenu/>}
                </ToggleMenu>

                <LogImg src={logoImg} alt="Logo minha Carteira"/>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/createRegister">
                    <MdAccountBalanceWallet/>
                    Novo Registro
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward/>
                    Saidas
                </MenuItemLink>
                <MenuItemButton onClick={signOut}>
                    <MdExitToApp/>
                    Sair
                </MenuItemButton>
            </MenuContainer>

            <ThemeToggleFooter
                menuIsOpen={toggleMenuIsOpened}
            >
                <Toggle 
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
        </Container>
    );
}

export default Aside;