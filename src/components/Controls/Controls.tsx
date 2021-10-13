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

  const keyState = {};

  useLayoutEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    setInterval(checkPressedKeys, 10);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
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
    keyState[e.code] = true;
    if (e.code === 'Escape') toggleGameRunningStatus();
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (!isGameStartedActual.current) return;
    // e.preventDefault();
    e.stopPropagation();
    keyState[e.code] = false;
  };

  const checkPressedKeys = () => {
    let x = 0;
    let y = 0;
    const player = game.getPlayer();
    if (keyState['KeyW'] || keyState['ArrowUp']) y = -1;
    if (keyState['KeyA'] || keyState['ArrowLeft']) x = -1;
    if (keyState['KeyS'] || keyState['ArrowDown']) y = 1;
    if (keyState['KeyD'] || keyState['ArrowRight']) x = 1;
    player.direction = { x, y };
  }

  return <StyledControls />;
}
