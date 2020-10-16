import React from 'react';
import styled from 'styled-components';
import Blog from './Blog';
import Tweets from './Tweets';

const TweetSection = (props) => {
  return (
    <div className={props.className}>
      <Blog />
      <Tweets />
    </div>
  );
};

const StyledTweetSection = styled(TweetSection)`
  height: 90%;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export default StyledTweetSection;
