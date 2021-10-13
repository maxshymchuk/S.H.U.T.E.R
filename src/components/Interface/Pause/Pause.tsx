import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../styles';
import { useDispatch } from 'react-redux';
import { changeGameRunningStatus, changeGameStartedStatus } from '../../../store/actions';
import game from '../../../engine/Engine';
import Title from '../../Title/Title';
import { GAME_TITLE } from '../../../constants';

const StyledPause = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  backdrop-filter: grayscale(100%);
  background-color: #00000033;
`;

const SubTitle = styled.span`
  width: 100%;
  font-size: 14px;
  text-align: center;
`;

export default function Pause() {
  const dispatch = useDispatch();

  const handleGameContinue = () => {
    dispatch(changeGameRunningStatus(true));
    game.start();
  };

  const handleGameReset = () => {
    dispatch(changeGameStartedStatus(false));
    dispatch(changeGameRunningStatus(false));
    game.reset();
  };

  return (
    <StyledPause>
      <Title>{GAME_TITLE}</Title>
      <SubTitle>Game paused</SubTitle>
      <Button onClick={handleGameContinue}>Continue</Button>
      <Button onClick={handleGameReset}>Reset</Button>
    </StyledPause>
  );
}
