import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import TweetInfo from './TweetInfo';
import UserProfile from './UserProfile';

const useHover = () => {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, value];
};

const Content = ({ className, onClick, details }) => {
  const [hoverRef, isHovered] = useHover();
  return (
    <div className={className} ref={hoverRef}>
      <UserProfile />
      <TweetInfo {...details} />
      <div style={{ cursor: 'pointer' }} onClick={() => onClick(details.id)}>
        {isHovered ? 'X' : ''}
      </div>
    </div>
  );
};

const StyledContent = styled(Content)`
  display: flex;
  height: 70%;
  margin-top: 0%;
  padding: 2%;

  img {
    width: 10%;
    cursor: pointer;
  }
`;

export default StyledContent;
