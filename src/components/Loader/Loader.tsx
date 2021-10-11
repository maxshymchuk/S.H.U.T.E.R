import React from 'react';
import styled from "styled-components";
import {THEME} from "../../constants";

type LoaderPropsType = {
  color?: string;
  size?: number;
  width?: number;
};

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div<LoaderPropsType>`
  display: inline-block;
  position: relative;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};

  @keyframes rotation {
    0% {
      top: ${props => `${props.size / 2 - props.width}px`};
      left: ${props => `${props.size / 2 - props.width}px`};
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0;
      left: 0;
      width: ${props => `${props.size - 2 * props.width}px`};
      height: ${props => `${props.size - 2 * props.width}px`};
      opacity: 0;
    }
  }
  
  &:before,
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    border: ${props => `${props.width}px`} solid ${props => `${props.color}`};
    opacity: 1;
    border-radius: 50%;
    animation: rotation 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  &:after {
    animation-delay: -1s;
  }
`

export default function Loader({ color = THEME.ACCENT_COLOR, size = 100, width = 8 }: LoaderPropsType) {
  return (
    <StyledLoader>
      <Spinner color={color} size={size} width={width} />
    </StyledLoader>
  );
}
