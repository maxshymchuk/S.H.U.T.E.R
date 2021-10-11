import React from 'react';
import styled from "styled-components";
import {IPosition} from "../../../interfaces";
import {InterfaceElement} from "../../../styles";

type TutorialPropsType = {
  position: IPosition;
  message: string;
};

const StyledTutorial = styled(InterfaceElement)<Partial<TutorialPropsType>>`
  left: ${props => `${props.position.x}px`};
  top: ${props => `${props.position.y}px`};
  background-color: red;
  padding: 10px;
`;

export default function Tutorial({ position, message }: TutorialPropsType) {
  return <StyledTutorial position={position}>{message}</StyledTutorial>;
}
