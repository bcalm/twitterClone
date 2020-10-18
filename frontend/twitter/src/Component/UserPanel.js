import React from 'react';
import styled from 'styled-components';

const userDetails = {
  userName: 'Vikram Singh',
  userId: 'bcalm',
  joinedAt: 'Thu Oct 15 2020',
  following: 0,
  followers: 0,
};

const UserPanel = (props) => {
  return (
    <div className={props.className}>
      <p>
        <span style={{ fontSize: 'x-large' }}>{userDetails.userName} </span>
        <span style={{ color: 'gray' }}>@{userDetails.userId}</span>
      </p>
      <p>Joined: {userDetails.joinedAt}</p>
      <span>Followers: {userDetails.followers} </span>
      <span>Following: {userDetails.following}</span>
    </div>
  );
};

const StyledUserPanel = styled(UserPanel)`
  margin-left: 2%;
  margin-right: 2%;
`;

export default StyledUserPanel;
