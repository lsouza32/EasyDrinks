import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #105ECC;
  margin: 32px 40px;
  padding: 60px 40px;
  border-radius: 8px;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0px 12px;
`;

export const ContainerEmail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  width: 450px;
`;

export const InputEmail = styled.input.attrs({type: 'text'})`
  background: #f5f5f5;
  color: #000;
  font-size: 15px;
  cursor: pointer;
  padding-left: 8px;
  width: 100%;
  border-radius: 8px;
  height: 40px;
  border-color: transparent;
  outline: none;
  margin-right: 20px;
`;

export const Text= styled.text`
  color: #f5f5f5;
`;
