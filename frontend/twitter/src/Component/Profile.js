import React from 'react';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import UserPanel from './UserPanel';
import Options from './Options';

const Profile = (props) => {
  return (
    <div className={props.className}>
      <UserProfile />
      <UserPanel />
      <Options />
    </div>
  );
};

const StyledProfile = styled(Profile)`
  height: 100%;
  width: 50%;
  background-color: white;
  border: solid 0.5px lightgray;
  margin-left: 10px;
  margin-right: 10px;
  overflow: scroll;
`;

export default StyledProfile;
