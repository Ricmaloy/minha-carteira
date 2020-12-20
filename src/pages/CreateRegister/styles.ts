import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    margin: 10px 0;
    padding: 30px 20px;
    
    border-radius: 5px;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

`;

export const Form = styled.form`
    button {
        width: 150px;
        background-color: #03BB85;
    }
`;

export const Title = styled.h2`
    @media(max-width: 1200px) {
        font-size: 20px;
    }
`;

export const InputField = styled.div`
    margin-left: 8px;

    > input {
        color: ${props => props.theme.colors.white};
        background-color: transparent;
    }

    > input[type="number"] {
        transform: translateY(2px);
    }

    > div > select {
        width: 60%;

        background-color: transparent;

        border-radius: 0;

        border-bottom: 1px solid #CECECE;

        color: ${props => props.theme.colors.white};

        & > option {
            color: ${props => props.theme.colors.black};

        }

        @media(max-width: 1200px) {
            width: 90%;
        }
    }
`;
export const ContentBox = styled.div`
    display: flex;

    > div {
        width: 25%;

        @media(max-width: 1000px) {
            width: 50%;
        }

        @media(max-width: 800px) {
            width: 70%;
        }
    }
    
    @media(max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Content = styled.div`
    margin-bottom: 15px;
    margin: 0 10px 20px 10px;

    &:nth-child(1) {
        h2 {
            margin-bottom: 10px;
        }
    }
`;