import React from 'react';
import styled from 'styled-components';

const Container = (props) => {
  return <div className={props.className}></div>;
};

const StyledContainer = styled(Container)`
  height: 100%;
  width: 50%;
  background-color: white;
  margin-left: 10px;
  margin-right: 10px;
  border-width: 0.5px;
  border-style: solid;
  border-color: lightgrey;
  border-image: initial;
  overflow: scroll;
`;

export default StyledContainer;
