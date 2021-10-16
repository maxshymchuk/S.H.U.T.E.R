import styled, { css } from 'styled-components';
import { SUBTITLE_FONT_SIZE, TITLE_FONT_SIZE } from '../constants';
import { appearingAnimation } from './animations';

interface IWindowProps {
  left?: boolean;
  right?: boolean;
}

function getMatrix(left: boolean, right: boolean) {
  if (left === right) return null;
  if (left) return 'matrix(1, -0.15, 0, 1, 0, 0)';
  if (right) return 'matrix(1, 0.15, 0, 1, 0, 0)';
}

export const Window = styled.div<IWindowProps>`
  display: flex;
  flex-direction: column;
  transform: ${props => getMatrix(props.left, props.right)};
  margin-left: ${props => props.left ? 0 : 'auto'};
  ${appearingAnimation};

  * {
    user-select: none;
    margin-left: inherit;
  }
`;

export const WindowControls = styled.div`
  > * {
    display: block;
    position: relative;
    left: 0;
    transition: 0.2s all;
    margin: 5px 0;

    &:hover {
      left: 10px;
    }
  }
`;

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

export const Overlay = styled(FullscreenAbsolute)`
  pointer-events: none;
  background: radial-gradient(circle at 200px 50%, transparent 0%, #000 100%);
  ${appearingAnimation};
`;

export const InterfaceElement = styled.div`
  position: absolute;
  user-select: none;
  left: 0;
  top: 0;
`;

export const Button = styled.button`
  min-width: 200px;
  outline: none;
  border: none;
  background: none;
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 5px;
  white-space: nowrap;
`;

export const TitleFontCss = css`
  text-align: center;
  text-transform: uppercase;
  font-size: ${TITLE_FONT_SIZE};
  letter-spacing: 8px;
  margin: 0;
`;

export const SubtitleFontCss = css`
  text-align: center;
  text-transform: uppercase;
  font-size: ${SUBTITLE_FONT_SIZE};
  letter-spacing: 8px;
  margin: 0;
`;
