import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { Invisible } from '../../styles';
import game from '../../engine/Engine';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store/store';
import { changeGameRunningStatus } from '../../store/actions';

const StyledControls = styled(Invisible)``;

export default function Controls() {
  const dispatch = useDispatch();

  const isGameStarted = useSelector((store: IRootState) => store.isGameStarted);
  const isGameRunning = useSelector((store: IRootState) => store.isGameRunning);

  const isGameStartedActual = useRef(isGameStarted);
  const isGameRunningActual = useRef(isGameRunning);

  useLayoutEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useLayoutEffect(() => {
    isGameStartedActual.current = isGameStarted;
  }, [isGameStarted]);

  useLayoutEffect(() => {
    isGameRunningActual.current = isGameRunning;
  }, [isGameRunning]);

  const toggleGameRunningStatus = () => {
    if (isGameRunningActual.current) {
      game.stop();
    } else {
      game.start();
    }
    dispatch(changeGameRunningStatus(!isGameRunningActual.current));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isGameStartedActual.current) return;
    // e.preventDefault();
    e.stopPropagation();
    switch (e.key) {
      case 'Escape':
        toggleGameRunningStatus();
        break;
      default:
        break;
    }
  };

  return <StyledControls />;
}
