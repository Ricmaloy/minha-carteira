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
                    <span>Dashboard</span>
                </MenuItemLink>
                <MenuItemLink href="/createRegister">
                    <MdAccountBalanceWallet/>
                    <span>Novo Registro</span>
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward/>
                    <span>Entradas</span>
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward/>
                    <span>Saidas</span>
                </MenuItemLink>
                <MenuItemButton onClick={signOut}>
                    <MdExitToApp/>
                    <span>Sair</span>
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