import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding-top: 24px;
  padding-bottom: 16px;
`;

export const HomePage = styled.div`
  display: flex;
  list-style: none;
  align-items: center;
  flex-direction: row;
  justify-content: center;

`;

export const List = styled.div`
  display: flex;
  list-style: none;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-right: 24%;
`;

export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  align-items: center;
  display: flex;
`;

export const Items = styled.div`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;

  button{
    min-width: 124px;
    max-height: 44px;
    margin-right: 16px;
    margin-top: 16px;
    display: flex;
    cursor: pointer;
    white-space: nowrap;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-size: 16px;
    line-height: 20px;
    border: 1px solid transparent;
  }
`;
