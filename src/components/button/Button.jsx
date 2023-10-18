import React from 'react';
import { styled } from 'styled-components';

function Button(props) {
  return (
    <>
      <StyledButton type='submit' {...props}>
        {props.content}
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  border-radius: 10px;
  font-size: 15px;
  width: ${(props) => props.width || '170px'};
  height: ${(props) => props.height || '40px'};
  background-color: ${(props) => props.backgroundcolor || 'var(--main-color)'};
  color: ${(props) => props.color || 'white'};
`;

export default Button;
