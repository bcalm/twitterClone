import React from 'react';
import styled from 'styled-components';
import TweetBox from './TweetBox';

const Blog = (props) => {
  return (
    <div className={props.className}>
      <TweetBox />
    </div>
  );
};

const StyledBlog = styled(Blog)`
  height: 28%;
  width: 100%;
  border-bottom: 0.5px solid lightgrey;
`;

export default StyledBlog;
