import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 5px;
`;

export const TransactionContent = styled.div`
    height: 400px;
    overflow-y: scroll;

    padding-right: 16px;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }
`;

export const Title = styled.h2`
    padding-left: 16px;
    margin-bottom: 15px;
`;