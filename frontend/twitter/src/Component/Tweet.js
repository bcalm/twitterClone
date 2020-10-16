import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const Tweet = (props) => {
  const {
    commentCount,
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
      {
        <Content
          details={{
            commentCount,
            content,
            id,
            likeCount,
            retweetCount,
            timeStamp,
            userId,
            userName,
          }}
        />
      }
    </div>
  );
};

const StyledTweet = styled(Tweet)`
  height: fit-content;
  width: 100%;
  border-bottom: solid 0.5px lightgray;
  margin-bottom: 1%;
`;

export default StyledTweet;
