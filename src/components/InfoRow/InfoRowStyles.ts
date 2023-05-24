import styled from 'styled-components';

export const InfoRowContainer = styled.div`
  height: 25%;
  display: flex;
  padding: 0 10%;
  align-items: center;
`

export const Title = styled.span`
  font-family: monospace;
  font-size: 22px;
  font-weight: 500;
  color: gray;
  margin-right: 5%;
`

export const Value = styled(Title)`
  color: rgb(0, 0 ,0);
`