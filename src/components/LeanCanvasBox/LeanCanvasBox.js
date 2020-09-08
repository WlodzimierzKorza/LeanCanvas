import React from 'react';
import { StyledButton, StyledBox } from './styled';

const LeanCanvasBox = ({ name, id }) => {
  return (
    <>
      <StyledBox>
        <h2>
          {id}. {name}
        </h2>
        <StyledButton>+</StyledButton>
      </StyledBox>
    </>
  );
};

export default LeanCanvasBox;
