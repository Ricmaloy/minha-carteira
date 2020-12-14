import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Calendar = styled.div`
    width: 39%;

    @media(max-width: 800px) {
        width: 100%;
    }
`;
