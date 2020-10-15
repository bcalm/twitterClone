import React from 'react';
import styled from 'styled-components';
import Main from './Component/Main';

const App = (props) => {
  return (
    <div className={props.className}>
      <Main />
    </div>
  );
};

const StyledApp = styled(App)`
  height: 98vh;
  width: 100vw;
  display: flex;
  position: absolute;
  background-color: whitesmoke;
  font-family: sans-serif;
  text-align: start;
  justify-content: start;
  overflow: hidden;
  margin: 0px;
  padding: 0px;
`;

export default StyledApp;
