import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 1px 4px 6px 1px  rgba(0, 0, 0, 0.4);
  padding: 32px 48px;
  width: 300px;
  height: 400px;
  align-items: start;
  justify-content: start;
  display: flex;
  flex-direction: column;
  margin: 24px;
`;

export const PriceCardHeader= styled.div`
  margin-bottom: 20px;
`;

export const PriceValue = styled.div`
  flex-direction: row;
`;

export const TextPrice = styled.text`
  font-size: 48px;
  font-weight: bold;
`;

export const Text = styled.text`
  font-size: 16px;
`;

export const PriceItems = styled.ul`
  margin-top: 10px;
  margin-bottom: 20px;

  padding: 0;


  li{
    font-size: 16px;
    line-height: 32px;
  }
`;


