import styled from 'styled-components';

interface ITitleContainerProps {
    lineColor?: string;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin-bottom: 25px;

    @media(max-width: 470px) {
        flex-direction: column-reverse;
    }
`;

export const TitleContainer = styled.div<ITitleContainerProps>`

    > h1 {
        color: ${props => props.theme.colors.white};

        &::after {
            content: '';
            display: block;
            width: 55px;
            border-bottom: 5px solid ${props => props.lineColor};
            border-radius: 5px;
        }
    }

    @media(max-width: 440px){
        > h1 {
            font-size: 20px;

            &::after {
                border-bottom: 5px solid ${props => props.lineColor};
            }
        }
    }
`;

export const Controllers = styled.div`
    display: flex;

    @media(max-width: 470px) {
        align-self: flex-end;

        margin-bottom: 10px;
    }
`;