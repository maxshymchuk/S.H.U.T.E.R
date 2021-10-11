import React from 'react';
import styled from "styled-components";

const StyledCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  background-color: #00FF0055;
`;

export default function Canvas() {
  return (
    <StyledCanvas />
  );
}
