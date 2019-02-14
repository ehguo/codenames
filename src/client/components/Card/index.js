import React, { useState } from 'react';
import Card from './Card';

export default (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => setIsClicked(true);
  return (
    <Card isClicked={isClicked} onClick={handleClick} {...props} />
  );
}
