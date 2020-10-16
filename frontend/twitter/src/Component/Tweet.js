import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import TweetOptions from './TweetOptions';

const Tweet = (props) => {
  const {
    replyCount,
    content,
    id,
    likeCount,
    retweetCount,
    timeStamp,
    userId,
    userName,
  } = props;
  return (
    <div className={props.className}>
      <Content
        details={{
          content,
          timeStamp,
          userId,
          userName,
        }}
      />
      <TweetOptions details={{ likeCount, replyCount, retweetCount }} />
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
