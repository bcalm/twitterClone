import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
  return (
    <div className={props.className}>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <Link to="/profile">
        <h2>Profile</h2>
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

  h2 {
    color: #4a61c8;
    font-weight: bolder;
  }

  a {
    text-decoration: none;
    text-align: center;
  }
`;

export default StyledSideBar;
