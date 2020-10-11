import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    padding-left: 20px;
    background-color: ${props => props.theme.colors.secondary};
    border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`;

export const LogImg = styled.img`
    width: 40px; 
    height: 40px; 
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`;

export const MenuContainer = styled.nav`
    display:flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    margin: 7px 0;
    display: flex;
    align-items: center;

    transition: opacity .3s,
                margin .3s;

    &:hover {
        opacity: .7;
        margin: 7px 4px;
    }

    > svg {
        font-size: 20px;
        margin-right: 5px;
    }
`;