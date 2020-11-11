import styled from 'styled-components';

export const Container = styled.div`
    width: 39%;
    height: 260px;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    margin: 10px 0;
    padding: 30px 20px;

    display: flex;
    flex-direction: column;
    justify-content:space-between;

    > header img {
        width: 35px;
        margin-left: 7px;
    }

    > header p {
        font-size: 18px;
    }

    @media(max-width: 770px){
        width: 100%;
        height: 220px;

        > header h1 {
            font-size: 28px;

            img {
                height: 26px;
                width: 26px;
            }
        }
    }

    @media(max-width: 440px){

        > header h1 {
            font-size: 24px;

            img {
                height: 20px;
                width: 20px;
            }
        }

        > header p,
        > footer span {
            font-size: 14px;
        }
    }
`;