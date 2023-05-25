import styled from 'styled-components';

export const PrimaryButton = styled.button`
  width: 175px;
  height: 65px;
  margin-top: 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  border: none;
  font-family: monospace;
  font-size: 22px;
  font-weight: 500;
  transition: all 0.3s ease 0s;
  
  &:hover {
    background-color: rgb(146, 153, 248);
    color: rgb(255, 255, 255);
    transform: translateY(-7px);
    border: 2px solid rgb(255, 255, 255);
  }
`