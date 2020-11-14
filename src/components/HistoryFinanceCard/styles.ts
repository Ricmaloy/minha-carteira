import styled, {keyframes} from 'styled-components';


interface ITagProps {
    color: string;
}

const fadeInLeft = keyframes`
    0% {
        transform: translateX(-100px);
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

export const Container = styled.li`
    background-color: ${ props => props.theme.colors.tertiary};

    list-style:none;
    border-radius: 5px;
    margin: 10px 0;
    padding: 12px 10px;

    display:flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    transition: all .3s;

    position: relative;

    animation: ${fadeInLeft} .5s ease;

    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding-left: 10px;
    }

    > div span {
        font-size: 22px;
        font-weight: 500;
    }

    > h3 {
        padding-right: 25px;
    }

    @media(max-width: 470px){

        > div span {
            font-size: 14px;
            font-weight: 500;
        }

        > h3 {
            font-size: 14px;
            font-weight: 500;
            padding-right: 15px;
        }
    }
`;

export const Tag = styled.div<ITagProps>`
    width: 10px;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: ${props => props.color};

    position: absolute;
    left: 0;
`;