import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
  return (
    <div className={props.className}>
      <span>{props.value}</span>
    </div>
  );
};

const StyledHeader = styled(Header)`
  margin: 1vw;
  height: 7%;
  margin-top: 1.5vw;
  width: 100%;
  border-bottom: 0.5px solid lightgrey;
  font-weight: 500;
  font-size: 2vw;
`;

export default StyledHeader;
