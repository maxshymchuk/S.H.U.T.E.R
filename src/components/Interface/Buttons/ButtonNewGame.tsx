import React from 'react';
import { Button } from '../../../styles/styles';
import { useDispatch } from 'react-redux';
import { changeGameRunningStatus, changeGameStartedStatus } from '../../../store/actions';
import game from '../../../engine/Engine';

export default function ButtonNewGame() {
  const dispatch = useDispatch();

  const handleNewGame = () => {
    dispatch(changeGameStartedStatus(true));
    dispatch(changeGameRunningStatus(true));
    game.reset();
    game.start();
  };

  return (
    <Button onClick={handleNewGame}>New game</Button>
  );
}
