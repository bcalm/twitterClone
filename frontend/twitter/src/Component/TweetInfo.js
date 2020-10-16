import React from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import TweetContent from './TweetContent';

const TweetInfo = (props) => {
  return (
    <div className={props.className}>
      <UserInfo
        userName={props.userName}
        userId={props.userId}
        timeStamp={props.timeStamp}
      />
      <TweetContent content={props.content} />
    </div>
  );
};

const StyledTweetInfo = styled(TweetInfo)`
  width: 100%;
`;

export default StyledTweetInfo;
