import React from 'react';
import styled from 'styled-components';
import TutorialMessage from './TutorialMessage/TutorialMessage';
import { FullscreenAbsolute } from '../../../../styles/styles';
import { IVector } from '../../../../engine/interfaces/features';

const StyledTutorial = styled(FullscreenAbsolute)`
`;

export default function Interface() {
  const position1: IVector = {
    x: 50,
    y: 50,
  };

  const position2: IVector = {
    x: 350,
    y: 350,
  };

  return (
    <StyledTutorial>
      <TutorialMessage position={position1} message='Message1' />
      <TutorialMessage position={position2} message='Message2' />
    </StyledTutorial>
  );
}
