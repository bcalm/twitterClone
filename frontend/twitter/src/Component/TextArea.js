import React from 'react';
import styled from 'styled-components';

const TextArea = (props) => {
  return (
    <textarea
      className={props.className}
      name="name"
      cols="90"
      rows="10"
      placeholder="what's happening"
    ></textarea>
  );
};

const StyledTextArea = styled(TextArea)`
  display: flex;
  border: none;
  width: 44vw;
  font-size: 1.5vw;
  margin-left: 1vw;
  justify-content: space-between;
`;

export default StyledTextArea;
