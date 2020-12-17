import styled from 'styled-components';

interface ICategoryProps {
    Categorycolor: string;
}

interface IAmountProps {
    Amountcolor: string;
}

export const Container = styled.li`
    height: 60px;

    margin: 0 20px;

    display:flex;
    justify-content: space-between;
    align-items: center;

    transition: all .3s;

    :not(:first-child) {
       border-top: 1px solid ${props => props.theme.colors.gray};
    }

    > * {
        width: 20%;
    }

    > :last-child {
        text-align: end;
    }

    :hover {
        transform: translateX(5px);
    }

    @media(max-width: 500px) {
        margin: 0 10px;
    }
`;

export const Date = styled.h2`
    @media(max-width: 1200px){
        font-size: 20px;
    }

    @media(max-width: 1000px){
        font-size: 17px;
    }

    @media(max-width: 500px) {
        font-size: 13px;
    }
`;

export const Description = styled.span`
    @media(max-width: 1200px){
        font-size: 14px;
    }

    @media(max-width: 500px) {
        font-size: 11px;
    }
`;

export const Frequency = styled.small`
    color: ${props => props.theme.colors.gray};

    @media(max-width: 1200px){
        font-size: 12px;
    }

    @media(max-width: 1000px){
        display: none;
    }
`;

export const Category = styled.span<ICategoryProps>`
    position: relative;

    color: ${props => props.Categorycolor};
    
    ::after{
      content: "";
      
      width: 10px;
      height: 10px;
      border-radius: 50%;  
      
      background-color: ${props => props.Categorycolor};

      position: absolute;
      top: 7px;
      left: -15px;

      @media(max-width: 1200px){
        width: 6px;
        height: 6px;
      }

      @media(max-width: 1200px){
        width: 4px;
        height: 4px;

        left: -12px;
      }

      @media(max-width: 600px){
        display: none;
      }
    }

    @media(max-width: 1200px){
        font-size: 14px;
    }

    @media(max-width: 1000px){
        font-size: 12px;
    }

    @media(max-width: 600px){
        display: none;
    }
`;

export const Cash = styled.h3<IAmountProps>`
    color: ${props => props.Amountcolor};

    @media(max-width: 1200px){
        font-size: 15px;
    }

    @media(max-width: 1000px){
        font-size: 13px;
    }

    @media(max-width: 600px){
        width: 30%;
    }

    @media(max-width: 500px) {
        font-size: 10px;
    }
`;