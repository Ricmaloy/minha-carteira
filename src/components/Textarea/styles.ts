import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    min-width: 100%;
    max-width: 100%;

    min-height: 85px;

    font-size: 15px;

    padding: 5px;

    border-bottom: 1px solid ${props => props.theme.colors.gray};

    color: ${props => props.theme.colors.white};

    background-color: transparent;

    &:focus,
    &:valid {
        border-bottom: 1px solid ${props => props.theme.colors.warning};
        border-bottom: 1px solid #424242;
    }
`;
