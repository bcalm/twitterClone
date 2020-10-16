import React, { useState } from 'react';
import styled from 'styled-components';

const TweetOption = ({
  defaultColor,
  activeColor,
  className,
  onClick,
  svg,
  count,
}) => {
  const [color, setColor] = useState(defaultColor);
  const handleOnMouseEnter = () => setColor(activeColor);
  const handleOnMouseLeave = () => setColor(defaultColor);

  return (
    <div
      className={className}
      onClick={onClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <span style={{ fill: color }}>{svg}</span>
      <span>{count}</span>
    </div>
  );
};

const StyledTweetOption = styled(TweetOption)`
  width: 25%;
  display: flex;
  height: 10%;
  svg {
    height: 20%;
  }

  span {
    width: 20%;
    height: 20%;
  }
`;

export default StyledTweetOption;
