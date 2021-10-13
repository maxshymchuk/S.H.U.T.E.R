import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/store';

const StyledCanvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

export default function Canvas() {
  const gameState = useSelector((store: IRootState) => store.gameState);

  useEffect(() => {
    console.log(gameState);
  }, [gameState])

  return (
    <StyledCanvas />
  );
}
