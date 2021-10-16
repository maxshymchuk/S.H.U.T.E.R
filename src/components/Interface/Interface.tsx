import React from 'react';
import styled from 'styled-components';
import { FullscreenAbsolute } from '../../styles/styles';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/store';
import Start from './Start/Start';
import Pause from './Pause/Pause';

interface IInterfaceProps {
  isPaused: boolean;
}

const StyledInterface = styled(FullscreenAbsolute)<IInterfaceProps>`
  backdrop-filter: ${props => props.isPaused ? 'grayscale(100%)' : null};
`;

export default function Interface() {
  const isGameStarted = useSelector((store: IRootState) => store.isGameStarted);
  const isGameRunning = useSelector((store: IRootState) => store.isGameRunning);

  return (
    <StyledInterface isPaused={isGameStarted && !isGameRunning}>
      {!isGameStarted && <Start />}
      {isGameStarted && !isGameRunning && <Pause />}
    </StyledInterface>
  );
}
