import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;
    color:  ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;

    border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div`
    color:  ${props => props.theme.colors.white};
    display: flex;
    margin-right: 20px;
`;

export const UserInfo = styled.div`
    text-align: end;
`;

export const UserPhoto = styled.img`
    width: 45px;
    height: 45px;
    
    border: 1px solid ${props => props.theme.colors.info};
    
    align-self: center;

    padding: 2px;
    margin-left: 10px;

    border-radius: 50%;
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;