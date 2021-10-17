import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { Invisible } from '../../styles/styles';
import game from '../../engine/Engine';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store/store';
import { changeGameRunningStatus } from '../../store/actions';

const StyledControls = styled(Invisible)``;

let timer: NodeJS.Timeout;
const keyState = new Set();

export default function Controls() {
  const dispatch = useDispatch();

  const isGameStarted = useSelector((store: IRootState) => store.isGameStarted);
  const isGameRunning = useSelector((store: IRootState) => store.isGameRunning);

  const isGameStartedActual = useRef(isGameStarted);
  const isGameRunningActual = useRef(isGameRunning);

  useLayoutEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useLayoutEffect(() => {
    isGameRunningActual.current = isGameRunning;
    if (isGameRunning) {
      timer = setInterval(checkPressedKeys, 10);
    } else {
      clearInterval(timer)
      keyState.clear();
    }
  }, [isGameRunning]);

  useLayoutEffect(() => {
    isGameStartedActual.current = isGameStarted;
  }, [isGameStarted]);

  const toggleGameRunningStatus = () => {
    dispatch(changeGameRunningStatus(!isGameRunningActual.current));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isGameStartedActual.current) return;
    e.stopPropagation();
    keyState.add(e.code);
    if (e.code === 'Escape') toggleGameRunningStatus();
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (!isGameStartedActual.current) return;
    e.stopPropagation();
    keyState.delete(e.code);
  };

  const checkPressedKeys = () => {
    let x = 0;
    let y = 0;
    const player = game.getPlayer();
    if (keyState.has('KeyW') || keyState.has('ArrowUp')) y += -1;
    if (keyState.has('KeyA') || keyState.has('ArrowLeft')) x += -1;
    if (keyState.has('KeyS') || keyState.has('ArrowDown')) y += 1;
    if (keyState.has('KeyD') || keyState.has('ArrowRight')) x += 1;
    player.direction = { x, y };
  };

  return <StyledControls />;
}
