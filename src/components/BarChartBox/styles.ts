import styled, {keyframes} from 'styled-components';

interface ILegendProps {
    color: string;
}

const fadeInRight = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    50% {
        opacity: .3;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 49%;
    min-height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    display: flex;

    animation: ${fadeInRight} .5s;

    @media(max-width: 1200px) {
        display: flex;
        flex-direction: column;  

        width: 100%;
        height: auto;
    }
`;

export const SideLeft = styled.aside`
    flex: 1;
    padding: 30px 0 30px 20px;

    > h2 {
        padding-left: 16px;
        margin-bottom:10px;
    }

    @media(max-width: 500px) {
        padding: 30px 0 0 20px;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;

    max-height: 175px;

    overflow-y: scroll;

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

    
    @media(max-width: 1200px) {
        display: flex;

        height: auto;
    }

    @media(max-width: 440px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;

    padding-left: 16px;

    > div {
        background-color: ${props => props.color};

        width: 50px;
        height: 50px;
        border-radius: 5px;

        font-size: 16px;
        line-height: 50px;
        text-align: center;
    }

    > span {
        margin-left: 10px;
        font-size: 14px;
    }

    @media(max-width: 1000px) {
        > div {
            width: 30px;
            height: 30px;
            
            font-size: 10px;
            line-height: 30px;
        }

        > span {
            font-size: 14px;
        }
    }
`;

export const SideRight = styled.main`
    flex: 1;
    min-height: 150px;

    display: flex;
    justify-content: center;

    padding-top: 35px;
    transform: translateX(-40px);

    @media(max-width: 1200px) {
        transform: translateX(-20px);
        padding-top: 0px;
    }

    @media(max-width: 600px) {
        padding-top: 15px;

        font-size: 12px;
    }

    > div {
        flex: 1;
        > div {
        flex: 1;
            > svg {
                font-size: 15px;
                
            }
        }
    }

`;