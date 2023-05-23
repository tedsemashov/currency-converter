import styled from 'styled-components';

export const TableContainer = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
`

export const CurrenciesList = styled.ul`
  list-style-type: none;
  max-height: 525px;
  overflow: auto;
  margin: 25px 0;
  padding: 0;
`

export const CurrencyRow = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding: 0 30px;
`

export const Currency = styled.span`
  padding: 0;
  margin: 0;
  font-size: 30px;
  color: gray;
`;

export const Highlight = styled.span`
  font-weight: 500;
  color: rgb(0, 0, 0);
`;