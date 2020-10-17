import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import TweetOptions from './TweetOptions';

const Tweet = ({
  content,
  id,
  timeStamp,
  userId,
  userName,
  className,
  onClick,
}) => {
  return (
    <div className={className}>
      <Content
        details={{
          content,
          timeStamp,
          userId,
          userName,
          id,
        }}
        onClick={onClick}
      />
      <TweetOptions id={id} />
    </div>
  );
};

const StyledTweet = styled(Tweet)`
  height: 15vw;
  width: 100%;
  border-bottom: solid 0.5px lightgray;
  margin-bottom: 1%;
`;

export default StyledTweet;
