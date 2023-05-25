import styled from 'styled-components';
import { device } from './constants/resolutions';

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CurrencyTableContainer = styled.div`
  background-color: rgb(123, 131, 237);
  border-radius: 30px;
  display: flex;
  padding: 50px 3%;
  flex-direction: column;
  position: relative;
  margin: 10px;
`;

export const Rates = styled.p`
  font-size: 27px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  margin: 0 0 20px 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const InteractiveElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  justify-content: center;
`;

export const TransparentBackground = styled.div`
  display: flex;
  background: rgb(255, 255, 255, 0.4);
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 30px;
  z-index: 2;
`;
