import React, { useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/store';
import game from '../../engine/Engine';

const StyledCanvas = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Canvas() {
  const gameState = useSelector((store: IRootState) => store.gameState);

  useLayoutEffect(() => {
    game.render.targetId = 'canvas';
  }, []);

  useEffect(() => {
    console.log(gameState);
  }, [gameState])

  return (
    <StyledCanvas id='canvas' />
  );
}
