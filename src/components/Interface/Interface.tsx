import React from 'react';
import styled from "styled-components";
import Tutorial from "./Tutorial/Tutorial";
import {IPosition} from "../../interfaces";
import {FullscreenAbsolute} from "../../styles";

const StyledInterface = styled(FullscreenAbsolute)`
`;

export default function Interface() {

  const position1: IPosition = {
    x: 50,
    y: 50,
  }

  const position2: IPosition = {
    x: 350,
    y: 350,
  }

  return (
    <StyledInterface>
      <Tutorial position={position1} message='Message1' />
      <Tutorial position={position2} message='Message2' />
    </StyledInterface>
  );
}
