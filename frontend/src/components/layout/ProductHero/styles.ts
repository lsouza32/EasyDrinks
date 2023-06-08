import styled from 'styled-components';



export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Card = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
`;

export const Slogan = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-top: 40px;
  color: #000;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;

  button{
    width: 124px;
    height: 48px;

    margin-right: 16px;
    margin-top: 16px;

    display: flex;
    cursor: pointer;

    white-space: nowrap;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid transparent;

    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
  }
`;

export const Image = styled.image`
  display: flex;
  width: 463px;
  height: 463px;
`;


