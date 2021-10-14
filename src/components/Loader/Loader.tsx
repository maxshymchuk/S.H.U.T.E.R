import React from 'react';
import styled from 'styled-components';
import { THEME } from '../../constants';
import { FullscreenAbsolute } from '../../styles';

interface ILoaderProps {
  color?: string;
  size?: number;
  width?: number;
}

const StyledLoader = styled(FullscreenAbsolute)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
`;

const Spinner = styled.div<ILoaderProps>`
  display: inline-block;
  position: relative;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};

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
    animation: blinking 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  &:after {
    animation-delay: -0.5s;
  }
`;

export default function Loader({ color = THEME.ACCENT_COLOR, size = 100, width = 8 }: ILoaderProps) {
  return (
    <StyledLoader>
      <Spinner color={color} size={size} width={width} />
    </StyledLoader>
  );
}
