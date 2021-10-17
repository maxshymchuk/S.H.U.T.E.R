import React, { useMemo } from 'react';
import styled from 'styled-components';
import { FullscreenAbsolute, Overlay } from '../../styles/styles';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/store';
import MainMenu from './components/MainMenu/MainMenu';
import Pause from './components/Pause/Pause';

const StyledInterface = styled(FullscreenAbsolute)``;

export default function Interface() {
  const isGameStarted = useSelector((store: IRootState) => store.isGameStarted);
  const isGameRunning = useSelector((store: IRootState) => store.isGameRunning);

  const isPaused = useMemo(() => isGameStarted && !isGameRunning, [isGameStarted, isGameRunning]);

  const style = useMemo(() => ({ backdropFilter: isPaused ? 'grayscale(100%)' : '' }), [isPaused]);

  return (
    <StyledInterface style={style}>
      {!isGameRunning && <Overlay />}
      {!isGameStarted && <MainMenu />}
      {isPaused && <Pause />}
    </StyledInterface>
  );
}
