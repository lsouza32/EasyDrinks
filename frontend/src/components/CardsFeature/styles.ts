import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: row;

  padding: 0 16px;
  margin: 0 16px;
  background: transparent;
`;

export const Image= styled.div`
  width: 64px;
  height: 64px;
  padding: 14px;
  margin: 0 16px 0 0;
  background-color: #D0E3FF;
  border-style: solid;
  border-width: 1px;
  border-radius: 16px;
`;

export const Title= styled.text`
  color: black;
  font-weight: bold;
`;

export const Description= styled.text`
  color: black;

`;
export const ContainerText= styled.div`
  display: flex;
  flex-direction: column;
`;
