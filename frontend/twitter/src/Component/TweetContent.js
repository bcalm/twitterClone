import React from 'react';
import styled from 'styled-components';

const TweetContent = (props) => {
  return <div className={props.className}>{props.content}</div>;
};

const StyledTweetComponent = styled(TweetContent)`
  cursor: pointer;
  height: 70%;
  padding: 2%;
`;

export default StyledTweetComponent;
