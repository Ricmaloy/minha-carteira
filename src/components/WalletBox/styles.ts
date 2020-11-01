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
`;