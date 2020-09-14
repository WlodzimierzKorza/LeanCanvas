import React from 'react';
import styled from 'styled-components';

const StyledConatiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = ({ children }) => {
  return <StyledConatiner>{children}</StyledConatiner>;
};

export default Container;

export const Row = ({ children, height }) => {
  const StyledRow = styled.div`
    width: 100%;
    height: ${height}vh;
    display: flex;
  `;
  return <StyledRow height={height}>{children}</StyledRow>;
};
const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Col = ({ children }) => {
  return <StyledCol>{children}</StyledCol>;
};
