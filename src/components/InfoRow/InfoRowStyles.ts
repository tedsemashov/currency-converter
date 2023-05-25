import styled from 'styled-components';

export const InfoRowContainer = styled.div`
  height: 25%;
  display: flex;
  width: 250px;
  padding: 0 25px;
  align-items: center;
`;

export const Title = styled.span`
  font-family: monospace;
  font-size: 22px;
  font-weight: 500;
  color: gray;
  margin-right: 20px;
`;

export const Value = styled(Title)`
  color: rgb(0, 0, 0);
`;

export const Dropdown = styled.select`
  max-width: 100px;
  appearance: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-family: monospace;
  font-size: 22px;
  font-weight: 500;
  color: rgb(0, 0, 0);
  outline: none;
`;
