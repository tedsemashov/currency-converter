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
  position: relative;
`

export const Rates = styled.p`
  font-size: 27px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  margin: 0 0 20px 0;
`

export const ContentContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
`

export const InteractiveElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  justify-content: center;
`

export const TransparentBackground = styled.div`
  display: flex;
  background: rgb(255, 255, 255, 0.4 );
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 30px;
  z-index: 2;
`
