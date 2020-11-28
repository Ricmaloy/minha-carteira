import styled, { css } from 'styled-components';

interface IContainerProps {
    menuIsOpen: boolean;
}

interface IThemeFooterProps {
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;

    background-color: ${props => props.theme.colors.secondary};
    border-right: 1px solid ${props => props.theme.colors.gray};

    position: relative;

    @media(max-width: 600px) {
        padding-left: 7px;
        position: fixed;
        z-index: 2;

        width: 170px;

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
`;

export const Header = styled.header`
    height: 70px;
    padding-left: 20px;

    align-items: center;
    display: flex;
`;

export const LogImg = styled.img`
    width: 40px; 
    height: 40px; 

    @media(max-width: 600px) {
        display: none;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media(max-width: 600px) {
        display: none;
    }
`;

export const MenuContainer = styled.nav`
    margin-top: 50px;

    display:flex;
    flex-direction: column;
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    
    text-decoration: none;
    padding: 12px 0;
    padding-left: 20px;

    display: flex;
    align-items: center;

    transition: opacity .3s,
                padding-left .3s,
                background-color .3s;

    &:hover {
        opacity: .7;
        padding-left: 30px;
        border-right: 2px solid ${props => props.theme.colors.info};
        background-color: ${props => props.theme.colors.backMenu};
    }

    > svg {
        font-size: 25px;
        margin-right: 5px;
    }
`;

export const MenuItemButton = styled.button`
    font-size: 16px;
    color: ${props => props.theme.colors.info};
    
    padding: 12px 0;
    padding-left: 20px;

    border:none;
    background: none;
    
    display: flex;
    align-items: center;

    transition: opacity .3s,
                padding-left .3s;

    &:hover {
        opacity: .7;
        padding-left: 30px;
    }

    > svg {
        font-size: 25px;
        margin-right: 5px;
    }
`;

export const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;

    border-radius: 5px;
    font-size: 22px;

    transform: translateX(10px);

    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};

    display: none;

    transition: opacity .3s;

    &:hover {
        opacity: .7s;
    }

    @media(max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;


export const ThemeToggleFooter = styled.footer<IThemeFooterProps>`
    display: none;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);

    @media(max-width: 470px){
        display: ${props => props.menuIsOpen ? 'flex' : 'none'}
    }
`;