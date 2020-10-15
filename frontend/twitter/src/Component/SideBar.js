import React from 'react';
import styled from 'styled-components';

const SideBar = (props) => {
  return <div className={props.className}></div>;
};

const StyledSideBar = styled(SideBar)`
  height: 100%;
  width: 25%;
  background-color: white;
  border-right: 0.5px solid lightgrey;
  border-left: 0.5px solid lightgrey;
`;

export default StyledSideBar;
