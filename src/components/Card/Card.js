import React, { useState } from 'react';
import {
  CardContainer,
  StyledCard,
  CardHead,
  CardHeader,
  CardContent,
  Input,
  Footer,
  Textarea,
  ColorSelect,
} from './styled';

const Card = ({ cardToggle, handleCardToggle, name, id }) => {
  const [cardColor, setCardColor] = useState('yellow');
  const [val, setCardFields] = useState({
    title: '',
    description: '',
  });
  const [disab, setDisabled] = useState({
    title: true,
    description: true,
  });

  const handleShowField = (e) => {
    setDisabled({
      ...disab,
      [e.target.name]: false,
    });
  };

  const handleHideField = (e) => {
    setDisabled({
      ...disab,
      [e.target.name]: true,
    });
  };

  const handleOnChange = (e) => {
    setCardFields({
      ...val,
      [e.target.name]: e.target.value,
    });
  };

  const handleCardColorChange = (e) => {
    setCardColor(e.target.value);
  };

  const colors = ['yellow', 'green', 'pink', 'blue'];
  return (
    <CardContainer className={cardToggle ? 'hide' : ''}>
      <StyledCard cardColor={cardColor}>
        <CardHead>
          <span>
            {id} {name}
          </span>
          <button onClick={handleCardToggle}>X</button>
        </CardHead>
        <CardHeader onClick={handleShowField}>
          <Input
            value={val.title}
            type="text"
            name="title"
            placeholder="Title"
            disabled={disab.title}
            onMouseLeave={handleHideField}
            onChange={handleOnChange}
          />
        </CardHeader>
        <CardContent onClick={handleShowField}>
          <Textarea
            disabled={disab.description}
            name="description"
            placeholder="Description"
            value={val.description}
            rows="5"
            onMouseLeave={handleHideField}
            onChange={handleOnChange}
          ></Textarea>
        </CardContent>
        <Footer>
          <div>
            {colors.map((item) => {
              return (
                <ColorSelect
                  key={item}
                  color={item}
                  onClick={handleCardColorChange}
                  value={item}
                />
              );
            })}
          </div>
        </Footer>
      </StyledCard>
    </CardContainer>
  );
};

export default Card;
