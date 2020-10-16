import React from 'react';
import styled from 'styled-components';
import TweetInfo from './TweetInfo';
import UserProfile from './UserProfile';

const Content = (props) => {
  return (
    <div className={props.className}>
      <UserProfile />
      <TweetInfo {...props.details} />
    </div>
  );
};

const StyledContent = styled(Content)`
  display: flex;
  height: 80%;
  margin-top: 0%;
  padding: 2%;

  img {
    width: 10%;
    cursor: pointer;
  }
`;

export default StyledContent;
