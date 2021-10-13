import React from 'react';
import styled from 'styled-components';
import { FullscreenAbsolute } from '../../styles';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/store';
import Start from './Start/Start';
import Pause from './Pause/Pause';

const StyledInterface = styled(FullscreenAbsolute)`
`;

export default function Interface() {
  const isGameStarted = useSelector((store: IRootState) => store.isGameStarted);
  const isGameRunning = useSelector((store: IRootState) => store.isGameRunning);

  return (
    <StyledInterface>
      {!isGameStarted && <Start />}
      {isGameStarted && !isGameRunning && <Pause />}
    </StyledInterface>
  );
}
