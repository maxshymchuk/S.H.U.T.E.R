import React from 'react';
import styled from 'styled-components';
import { InterfaceElement } from '../../../../styles';
import { IVector } from '../../../../engine/interfaces/features';

interface ITutorialMessageProps {
  position: IVector;
  message: string;
}

const StyledTutorialMessage = styled(InterfaceElement)<Partial<ITutorialMessageProps>>`
  left: ${props => `${props.position.x}px`};
  top: ${props => `${props.position.y}px`};
  background-color: red;
  padding: 10px;
`;

export default function TutorialMessage({ position, message }: ITutorialMessageProps) {
  return <StyledTutorialMessage position={position}>{message}</StyledTutorialMessage>;
}
