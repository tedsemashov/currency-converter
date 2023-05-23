import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const CurrencyTableContainer = styled.div`
  background-color: rgb(123, 131, 237);
  border-radius: 30px;
  min-width: 60vw;
  min-height: 60vh;
  max-width: 80vw;
  max-height: 80vh;
  display: flex;
  padding: 50px;
  flex-direction: column;
`

export const Rates = styled.p`
  font-size: 27px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  margin: 0 0 20px 0;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`