import React from 'react';
import styled from 'styled-components';

const UserProfile = (props) => {
  return (
    <div className={props.className}>
      <img src="../images/userIcon.webp" alt="user profile"></img>
    </div>
  );
};

const StyledUserProfile = styled(UserProfile)`
  width: 40px;
  border-radius: 50%;
`;

export default StyledUserProfile;
