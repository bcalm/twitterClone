import React from 'react';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import TextArea from './TextArea';

const TweetBox = (props) => {
  return (
    <div className={props.className}>
      <UserProfile />
      <TextArea />
    </div>
  );
};

const StyledTweetBox = styled(TweetBox)`
  display: flex;
  width: 96%;
  padding: 2%;
  height: 63%;
`;

export default StyledTweetBox;
