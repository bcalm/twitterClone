import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
  return (
    <div className={props.className}>
      <Link to="/">
        <h3>Home</h3>
      </Link>
    </div>
  );
};

const StyledSideBar = styled(SideBar)`
  height: 100%;
  width: 25%;
  background-color: white;
  border-right: 0.5px solid lightgrey;
  border-left: 0.5px solid lightgrey;
`;

export default StyledSideBar;
