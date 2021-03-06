import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 150px;

    margin: 10px 0px;
    padding: 15px 40px;
    border-radius: 5px;
    border-top: 15px solid  ${props => props.theme.colors.warning};

    background-color: ${props => props.theme.colors.tertiary};
    color:  ${props => props.theme.colors.white};

    @media(max-width: 1380px) {
        height: 130px;
    }

    @media(max-width: 1200px) {
        padding: 15px 30px;
    }

    @media(max-width: 1000px) {
        padding: 15px 15px;
    }

    @media(max-width: 800px) {
        height: 110px;
    }

    @media(max-width: 600px) {
        padding: 5px 15px;
    }
`;

export const WeekDay = styled.span`
    font-size: 20px;

    margin-bottom: 10px;

    @media(max-width: 1380px) {
        font-size: 15px;
    }
`;

export const Date = styled.div`
    display: flex;
`;

export const Day = styled.h1`
    font-size: 35px;
    font-weight: bold;

    margin-right: 10px;

    @media(max-width: 1380px) {
        font-size: 30px;
    }

    @media(max-width: 1200px) {
        font-size: 25px;
    }
`;

export const Month = styled.h1`
    font-size: 35px;

    font-weight: bold;

    @media(max-width: 1380px) {
        font-size: 30px;
    }

    @media(max-width: 1200px) {
        font-size: 25px;
    }
`;