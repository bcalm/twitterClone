import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostAPI from '../api/PostApi';

const UserPanel = (props) => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    PostAPI.getUserDetails('bcalm').then(setUserDetails);
  }, []);

  return (
    <div className={props.className}>
      <p>
        <span style={{ fontSize: 'x-large' }}>{userDetails.userName} </span>
        <span style={{ color: 'gray' }}>@{userDetails.userId}</span>
      </p>
      <p>Joined: {userDetails.joinedAT}</p>
      <span>Followers: {userDetails.followersCount} </span>
      <span>Following: {userDetails.followingCount}</span>
    </div>
  );
};

const StyledUserPanel = styled(UserPanel)`
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 4%;
`;

export default StyledUserPanel;
