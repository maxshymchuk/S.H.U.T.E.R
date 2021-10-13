import styled from 'styled-components';

export const Invisible = styled.div`
  position: absolute;
  top: -9999px;
  left: -9999px;
  width: 0;
  height: 0;
  user-select: none;
  pointer-events: none;
`;

export const FullscreenAbsolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  user-select: none;
`;

export const InterfaceElement = styled.div`
  position: absolute;
  user-select: none;
  left: 0;
  top: 0;
`;

export const Button = styled.button`
`;
