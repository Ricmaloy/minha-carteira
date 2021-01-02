import styled from 'styled-components';

interface IBankCardProps {
    color1: string;
    color2: string;
}

export const Container = styled.div`
    width: 100%;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 5px;

    @media(max-width: 600px) {  
        background-color: transparent;
    }
`;

export const Header = styled.header`
    padding: 20px;

    display: flex;
    justify-content: space-between;

    > svg {
        width: 25px;
        height: 25px;
    }

    @media( max-width: 600px) {
        padding-bottom: 0px;
        padding-left: 0px;
    }   
`;

export const Title = styled.h2``;

export const Content = styled.main`
    display: flex;

    margin: 20px 30px;

    overflow-y: hidden;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        height: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.primary};
        opacity: .7;
        
        border-radius: 10px;
        
        @media(max-width: 600px) {
            background-color: transparent;
        }
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};

        @media(max-width: 600px) {
            background-color: transparent;
        }

    }

    @media(max-width: 600px) {
        margin: 20px 0px;
    }

    @media( max-width: 600px) {
        margin: 10px 0px;

        width: 98vw;
        transform: translateX(-45px);
    }
`;

export const Card = styled.div<IBankCardProps>`
    min-width: 450px;
    height: 250px;

    background: linear-gradient(to bottom right, ${props => props.color1}, ${props => props.color2});
    color: #fff;

    border-radius: 7px;
    margin-bottom: 10px;

    &:not(:last-child) {
        margin-right: 10px;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media( max-width: 1000px) {
        min-width: 430px;
    }

    @media( max-width: 800px) {
        min-width: 410px;
    }

    @media( max-width: 770px) {
        min-width: 350px;
        height: 210px;
    }

    @media( max-width: 600px) {
        min-width: 400px;
        height: 240px;
    }

    @media( max-width: 600px) {
        min-width: 380px;
        height: 220px;
    }

    @media( max-width: 470px) {
        min-width: 345px;
        height: 210px;
    }

    @media( max-width: 600px) {
        min-width: 270px;
        height: 180px;

        &:first-child{
            margin-left: 30px;
        }
    }
`;


export const Upper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 10px 40px;

    > div {
        display: flex;
        align-items: center;
    
        > img {
            @media( max-width: 600px) {
                width: 62px;
                height: 38px;
            }
            
        }

        > p {
            padding-left: 10px;

            @media( max-width: 600px) {
                font-size: 9px;
            }
        }

        @media( max-width: 770px) {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    > img {
        @media( max-width: 600px) {
            width: 32px;
            height: 21px;
        }
    }

    @media( max-width: 800px) {
        margin: 10px 30px;
    }

    @media( max-width: 600px) {
        margin: 10px 20px;
    }
`;

export const Lower = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 10px 40px;

    @media( max-width: 800px) {
        margin: 10px 30px;
    }

    @media( max-width: 600px) {
        margin: 10px 20px;
    }
`;

export const Infos = styled.div`

    @media( max-width: 600px) {
        p {
            font-size: 10px;
        }
    }
`;

export const Account = styled.div`
    @media( max-width: 600px) {
        p {
            font-size: 10px;
        }
    }
`;