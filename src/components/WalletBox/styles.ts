import styled, { keyframes } from 'styled-components';

interface IContainerProps {
    PrimaryColor: string;
    SecondaryColor: string;
}

const fadeInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100px);
    }
    100% {
        transform: translateX(-0px);
        opacity: 1;
    }
`;

export const Container = styled.div<IContainerProps>`
    width: 32%;
    height: 150px;
    margin: 10px 0px;

    background: linear-gradient(to bottom right, ${props => props.PrimaryColor} 15%, ${props => props.SecondaryColor});
    color: ${props => props.theme.colors.white};
    color: #fff;
    border-radius: 7px;
    padding: 10px 20px;

    overflow: hidden;

    position: relative;

    animation: ${fadeInRight} .5s;

    > h1 strong {
        margin-right: 5px;
    }

    > img {
        height: 110%;

        opacity: .3;
        
        position: absolute;
        top: -10px;
        right: -30px;
    }

    > span {
        font-size: 18px;
        font-weight: 500;
    }

    > small {
        font-size: 12px;

        position: absolute;
        bottom: 10px;
    }

    @media(max-width: 770px) {
        > span {
            font-size: 14px;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 22px;
        
            > strong {
                display: inline-block;
                width: 100%;
                font-size: 16px;
            }
        }

    }

    @media(max-width: 500px) {
        width: 100%;

        > span {
            font-size: 20px;
        }

        > h1 {
            display: flex;

            font-size: 30px;
            margin-top: 5px;

            > strong {
                display: flex;
                width: auto;
                font-size: 30px;
                margin-right: 5px;
            }
        }
    }
`;