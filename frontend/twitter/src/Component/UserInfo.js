import React from 'react';
import styled from 'styled-components';

const UserInfo = (props) => {
  return (
    <div className={props.className}>
      <span>{props.userName}</span>
      <span>@{props.userId}</span>
      <span>{props.timeStamp}</span>
    </div>
  );
};

const StyledUserInfo = styled(UserInfo)`
  display: flex;
  justify-content: start;
  height: 20%;
  padding: 2%;
`;

export default StyledUserInfo;
