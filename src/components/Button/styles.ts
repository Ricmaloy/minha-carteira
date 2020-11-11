import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;

    margin: 10px 0;
    padding: 14px;

    border-radius: 7px;

    font-weight: bold;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.warning};

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }
`;