import React from 'react';
import styled from 'styled-components';
import image from '../images/userIcon.png';

const UserProfile = (props) => {
  return <img className={props.className} src={image} alt="user Profile"></img>;
};

const StyledUserProfile = styled(UserProfile)`
  width: 68px;
  border-radius: 50%;
  height: 72px;
`;

export default StyledUserProfile;
