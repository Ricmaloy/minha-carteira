import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;

    margin: 10px 0;
    padding: 14px;

    border-radius: 5px;

    font-weight: bold;
    color: ${props => props.theme.colors.white};
    color: #fff;
    background-color: ${props => props.theme.colors.warning};
    background-color: #1594c3;

    transition: opacity .3s;

    &:hover {
        opacity: .9;
    }
`;