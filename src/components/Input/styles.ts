import styled from 'styled-components';

export const Container = styled.input`

    width: 100%;

    font-size: 15px;

    padding: 5px;

    border-bottom: 1px solid ${props => props.theme.colors.gray};

    &:focus,
    &:valid {
        border-bottom: 1px solid ${props => props.theme.colors.warning};
    }
`;