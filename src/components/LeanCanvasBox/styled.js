import styled from 'styled-components';

export const StyledButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 5px;
  right: 5px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.red};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  line-height: 0;
  outline: none;
`;

export const StyledBox = styled.div`
  position: relative;
  border: solid 1px ${({ theme }) => theme.gray200};
  background-color: ${({ theme }) => theme.gray100};
  width: 100%;
  height: 100%;
  padding: 15px;
  h2 {
    color: ${({ theme }) => theme.red};
  }
  ${StyledButton} {
    display: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.white};
    border: solid 1px ${({ theme }) => theme.white};
    box-shadow: 0px 0px 15px ${({ theme }) => theme.gray200};
    z-index: 100;
    ${StyledButton} {
      display: flex;
    }
  }
`;
