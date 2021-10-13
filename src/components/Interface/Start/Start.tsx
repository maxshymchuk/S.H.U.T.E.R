import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../styles';
import { useDispatch } from 'react-redux';
import { changeGameRunningStatus, changeGameStartedStatus } from '../../../store/actions';
import game from '../../../engine/Engine';
import Title from '../../Title/Title';
import { GAME_TITLE } from '../../../constants';

const StyledStart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default function Start() {
  const dispatch = useDispatch();

  const handleGameStart = () => {
    dispatch(changeGameStartedStatus(true));
    dispatch(changeGameRunningStatus(true));
    game.start();
  };

  return (
    <StyledStart>
      <Title>{GAME_TITLE}</Title>
      <Button onClick={handleGameStart}>Start</Button>
    </StyledStart>
  );
}
