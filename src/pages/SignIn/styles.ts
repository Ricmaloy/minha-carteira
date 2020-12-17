import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.primary};
`;

export const ContainerContent = styled.div`
    width: 70vw;
    height: 80vh;

    border-radius: 5px;
    box-shadow: 1px 1px 7px 0px rgba(0,0,0, .3);

    display: flex;
`;

export const Panel = styled.div`
    width: 60%;
    height: 100%;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    background-color: #e44c4e;
    background: linear-gradient(to bottom right,#002b65 15%,#1CB5E0);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 70%;
    }

    p {
        width: 70%;

        font-size: 19px;
        text-align: center;
        color: ${props => props.theme.colors.black};
    }

    @media(max-width: 500px) {
        display: none;
    }
`;

export const Login = styled.div`
    width: 40%;
    height: 100%;

    position: relative;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    background-color: #fff;

    &::after {
        content: "";
        position: absolute;
        top: 55px;
        left: -25px;
        width: 50px;
        height: 50px;
        background-color: white;
        transform: rotate(45deg);

        @media(max-width: 500px) {
            display: none;
        }
    }

    @media(max-width: 500px) {
        width: 100%;
    }
`;

export const LoginContent = styled.div`
    height: 100%;

    margin: 0 55px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media(max-width: 500px) {
        margin: 0 40px;
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-top: 30px;

    > h2 {
        color: ${props => props.theme.colors.white};
        margin-right: 7px;
    
        @media(max-width: 500px) {
            font-size: 17px;
        }
    }

    > img {
        height: 40px;
        width: 40px;

        @media(max-width: 500px) {
            height: 30px;
            width: 30px;
        }
    }
`;

export const Main = styled.div`
    p {
        font-size: 12px;
        margin-bottom: 7px;
        color: ${props => props.theme.colors.gray};
    }
`;

export const Form = styled.form`
    span {
        font-size: 18px;
        letter-spacing: 1px;
    
        @media(max-width: 500px) {
            font-size: 15px;
        }
    }

`;

export const InputField = styled.div`

    margin-bottom: 20px;

    position: relative;

    &::after {
            content: "";
            position: absolute;
            bottom: 0px;
            left: 0;

            width: 0px;
            height: 1px;
            transition: all .3s;

            background-color: ${props => props.theme.colors.warning};
            background-color: #1594c3;
    }

    &:hover::after {
        width: 100%;
    }
`;

export const Credits = styled.p`
    font-size: 14px;
    margin-bottom: 8px;
    color: ${props => props.theme.colors.gray};

    @media(max-width: 500px) {
        font-size: 12px;
    }
`;




// export const Logo = styled.div`
//     display: flex;
//     align-items: center;

//     margin-bottom: 30px;

//     > h2 {
//         color: ${props => props.theme.colors.white};
//         margin-left: 7px;
//     }

//     > img {
//         height: 40px;
//         width: 40px;
//     }
// `;

// export const Form = styled.form`
//     width: 300px;
//     height: 300px;

//     padding: 30px;
//     border-radius: 10px;

//     background-color: ${props => props.theme.colors.tertiary};
// `;

// export const FormTitle = styled.h1`

//     margin-bottom: 40px;
//     color: ${props => props.theme.colors.white};

//     &:after {
//         content:'';
//         display: block;
//         width: 55px;
//         border-bottom: 7px solid ${props => props.theme.colors.warning};
//     }
// `;
