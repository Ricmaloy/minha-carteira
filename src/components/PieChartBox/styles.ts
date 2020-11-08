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
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
    }
`;

export const LegendContainers = styled.div`
    display: flex;
`;


export const LegendContainer = styled.ul`
    list-style: none;

    max-height: 175px;
    padding-right: 20px;

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
    }
`;