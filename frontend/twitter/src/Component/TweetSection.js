import React from 'react';
import styled from 'styled-components';
import Blog from './Blog';

const TweetSection = (props) => {
  return (
    <div className={props.className}>
      <Blog />
    </div>
  );
};

const StyledTweetSection = styled(TweetSection)`
  height: 90%;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export default StyledTweetSection;
