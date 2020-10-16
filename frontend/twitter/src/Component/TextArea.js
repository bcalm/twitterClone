import React, { useState } from 'react';
import styled from 'styled-components';

const TextArea = (props) => {
  const [value, setValue] = useState('');

  const handleOnChange = (event) => setValue(event.target.value);

  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      props.onEnter(value);
      setValue('');
    }
  };
  return (
    <textarea
      className={props.className}
      name="name"
      cols="90"
      rows="10"
      value={value}
      placeholder="what's happening"
      onChange={handleOnChange}
      onKeyDown={handleEnter}
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
