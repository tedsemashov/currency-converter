import styled from 'styled-components';

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
