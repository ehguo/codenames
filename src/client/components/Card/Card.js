import React from 'react';
import styled from '@emotion/styled';

const getColor = (team) => {
  switch (team) {
    case 'blue':
      return 'blue';
    case 'red':
      return 'red';
    default:
      return 'green';
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 50px;
  border: 11px solid;
  border-color: ${({ isClicked, team }) => isClicked && team};
`;

const Card = ({ word, team, isAssassin, isClicked, onClick }) => {
  return (
    <Container
      team={team}
      isClicked={isClicked}
      onClick={onClick}>
      {word}
    </Container>
  );
}

export default Card;
