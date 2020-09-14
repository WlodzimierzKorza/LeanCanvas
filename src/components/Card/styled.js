import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  position: fixed;
  top: 0;
  left: 0%;
  transition: top 0.2s;
  &.hide {
    top: -100vh;
  }
`;

export const StyledCard = styled.div`
  width: 60vh;
  height: 60vh;
  background: ${({ cardColor, theme }) => theme[cardColor]};
  box-shadow: 0 0 25px ${({ theme }) => theme.gray200};
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-height: 600px) {
    height: 90vh;
    width: 40vw;
  }
`;

export const CardHead = styled.div`
  color: ${({ theme }) => theme.black};
  padding-bottom: 8px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px ${({ theme }) => theme.black};
  button {
    font-size: 18px;
    line-height: 0;
    outline: none;
    transition: transform 0.2s;
    &:hover {
      transform: rotate(180deg);
    }
  }
`;

export const CardHeader = styled.div`
  height: 80px;
`;

export const Input = styled.input`
  font-size: 24px;
  font-weight: 400;
  padding: 5px;
  width: 100%;
  margin: 20px 0 10px 0;
  border-radius: 5px;
`;

export const CardContent = styled.div`
  margin-top: 10px;
  height: 50%;
  margin-bottom: 10px;
`;
export const Textarea = styled.textarea`
  font-size: 16px;
  padding: 5px;
  width: 100%;
  border-radius: 5px;
  height: 100%;
`;
export const Footer = styled.div`
  height: 60px;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

export const ColorSelect = styled.button`
  width: 40px;
  height: 40px;
  margin: 0 2px;
  border: solid 1px ${({ color, theme }) => theme.grey100};
  background-color: ${({ color, theme }) => theme[color]};
`;
