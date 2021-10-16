import React from 'react';
import { Button } from '../../../styles/styles';
import { useDispatch } from 'react-redux';
import { changeGameRunningStatus, changeGameStartedStatus } from '../../../store/actions';
import game from '../../../engine/Engine';

export default function ButtonMainMenu() {
  const dispatch = useDispatch();

  const handleGameReset = () => {
    dispatch(changeGameStartedStatus(false));
    dispatch(changeGameRunningStatus(false));
    game.reset();
  };

  return (
    <Button onClick={handleGameReset}>Main Menu</Button>
  );
}
