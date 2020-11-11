import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 59%;
    height: 260px;

    margin: 10px;
    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color:  ${props => props.theme.colors.white};

    border-radius: 7px;

    display: flex;

    @media(max-width: 770px) {
        display: flex;
        width: 100%;
    }

    @media(max-width: 500px) {
        flex-direction: column-reverse;
        height: 400px;
    }
    
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;
    padding-right: 0px;

    > h2 {
        margin-bottom: 20px;
    }

    @media(max-width: 770px) {
        padding: 20px 20px;
    }

    @media(max-width: 1345px) {
        padding: 0 15px 5px;
        margin-bottom: 7px;

        >  h2 {
            margin-top: 15px;
            margin-bottom: 7px;
        }
    }

    @media(max-width: 440px) {
        margin-top: 15px;
        margin-bottom: 7px;
    }
`;

export const LegendContainers = styled.div`
    display: flex;

    @media(max-width: 500px) {
        justify-content: space-evenly;
    }
`;


export const LegendContainer = styled.ul`
    list-style: none;

    max-height: 175px;
    padding-right: 5px;

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

    @media(max-width: 1345px) {
        display: none;
    }

    @media(max-width: 500px) {
        display: block;
    }
`;

export const LegendCompost = styled.ul`
    list-style: none;

    max-height: 175px;
    padding-right: 5px;

    overflow-y: scroll;

    display: none;

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

    @media(max-width: 1345px) {
        display: block;

        display:flex;
        flex-direction: column;
    }

    @media(max-width: 500px) {
        display: none;
    }
`;


export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;

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
        font-size: 18px;
    }

    @media(max-width: 1345px) {
        font-size: 14px;
        margin: 7px 0;

        > div {
            font-size: 13px;
            height: 40px;
            width: 40px;
            line-height: 40px;
        }
        > span {
            font-size: 13px;
            margin-left: 7px;
        }
    }
`;

export const SideRight= styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > img {
            width: 130px;
            height: 130px;

            margin-bottom: 20px;
        }

        > span {
            font-size: 18px;
            color: ${props => props.theme.colors.white}
        }

        > div {
            @media(max-width: 500px) {
                padding-top: 20px;
            }
        }
    }

    @media(max-width: 1345px) {
        height: 100%
    }
`;