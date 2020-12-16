import styled from 'styled-components';

import wave from '../../assets/wave.svg';

export const Container = styled.div`
    width: 100%;
    height: 340px;

    border-radius: 5px;

    margin: 10px 0px;
    padding: 30px 40px;
    padding-right: 10px;

    background-color: ${props => props.theme.colors.success};

    background-image: url(${wave});
    background-size: cover;

    color: #fff;

    display: flex;

    @media(max-width: 1380px) {
        height: 260px;
        padding: 20px 30px;
    }
`;

export const SideLeft = styled.div`
    width: 60%;

    display: flex;
    flex-direction: column;

    justify-content: space-between;

    @media(max-width: 1380px) {
        width: 70%;
    }

    @media(max-width: 1200px) {
        width: 100%;
    }

    @media(max-width: 800px) {
        width: 70%;
    }
`;

export const Title = styled.h2`

    @media(max-width: 1380px) {
        font-size: 20px;
    }

    @media(max-width: 1000px) {
        font-size: 16px;
    }
`;

export const Content = styled.span`
    @media(max-width: 1380px) {
        font-size: 14px;
    }

    @media(max-width: 1000px) {
        font-size: 12px;
    }
`;

export const Button = styled.button`
    height: 50px;

    border-radius: 5px;

    background-color: #f7f7f7;

    transition: all .3s;

    &:hover {
        background-color: #fff;
    }

    @media(max-width: 1000px) {
        font-size: 10px;
    }
`;

export const SideRight = styled.div`
    width: 40%;

    display: flex;
    justify-content: center;
    align-items: center;

    > img {
        width: 150px;
        height: 150px;

        @media(max-width: 1380px) {
            width: 80px;
            height: 80px;

            transform: translateX(15px);    
        }
    }

    @media(max-width: 1200px) {
        display: none;
    }

    @media(max-width: 800px) {
        display: flex;
    }
`;