import styled from 'styled-components';

interface IContainerProps {
    color: string
}

export const Container = styled.div<IContainerProps>`
    width: 32%;
    height: 150px;
    margin: 10px 0px;

    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    padding: 10px 20px;

    overflow: hidden;

    position: relative;

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

    @media(max-width: 450px) {
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