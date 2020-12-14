import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 59%;
    height: 500px;

    margin: 10px 0px;
    padding: 30px 20px;

    background-color: ${props => props.theme.colors.tertiary};
    color:  ${props => props.theme.colors.white};

    border-radius: 7px;

    @media(max-width: 1380px) {
        height: 400px;
    }

    @media(max-width: 800px) {
        width: 100%;
    }
`;

export const Title = styled.h2`
    padding-left: 16px;
    margin-bottom: 15px;
`;

export const ContainerContent = styled.div`
    width: 100%;
    height: calc(100% - 35px);

    display: flex;

    @media(max-width: 1200px) {
        flex-direction: column;
    }
`;

export const SideLeft = styled.main`
    width: 70%;

    color:  ${props => props.theme.colors.white};

    @media(max-width: 1200px) {
        width: 100%;
        height: 100%;

        font-size: 14px;
    }
`;



export const SideRight = styled.aside`
    width: 30%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 1200px) {
        flex-direction: row;
        align-items: center;
        width: 100%
    }
`;

export const Legend = styled.li<ILegendProps>`
    list-style: none;

    margin: 10px 30px;

    text-align: start;

    position:relative;

    ::before {
        content: "";
        position: absolute;
        top: 2px;
        left: -25px;
        width: 20px;
        height: 20px;
        background-color: ${props => props.color};
        opacity: .9;
        border-radius: 3px;

        @media(max-width: 1200px) {
            top: 0px;
        }
    }

    @media(max-width: 1280px) {
        font-size: 15px;

        margin-right: 10px;
        margin-left: 50px;
    }

    @media(max-width: 1200px) {
        font-size: 13px;

        margin-left: 30px;
    }
`;
