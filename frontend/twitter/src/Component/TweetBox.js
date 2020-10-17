import React from 'react';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import TextArea from './TextArea';

const TweetBox = ({ className }) => {
  return (
    <div className={className}>
      <UserProfile />
      <TextArea />
    </div>
  );
};

const StyledTweetBox = styled(TweetBox)`
  display: flex;
  width: 96%;
  padding: 2%;
  height: 25%;
  border-bottom: 0.5px solid lightgrey;
`;

export default StyledTweetBox;
