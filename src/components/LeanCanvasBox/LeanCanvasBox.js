import React, { useState } from 'react';
import Card from 'components/Card/Card';
import { StyledButton, StyledBox } from './styled';

const LeanCanvasBox = ({ name, id }) => {
  const [cardToggle, setCardToggle] = useState(true);
  const handleCardToggle = () => {
    setCardToggle(!cardToggle);
  };
  return (
    <>
      <StyledBox>
        <h2>
          {id}. {name}
        </h2>
        <StyledButton onClick={handleCardToggle}>+</StyledButton>
      </StyledBox>
      <Card
        cardToggle={cardToggle}
        handleCardToggle={handleCardToggle}
        name={name}
        id={id}
      />
    </>
  );
};

export default LeanCanvasBox;
