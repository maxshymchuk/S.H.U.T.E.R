import React from 'react';
import { Button } from '../../../styles/styles';
import { useDispatch } from 'react-redux';
import { changeGameRunningStatus, changeGameStartedStatus } from '../../../store/actions';

export default function ButtonNewGame() {
  const dispatch = useDispatch();

  const handleNewGame = () => {
    dispatch(changeGameStartedStatus(true));
    dispatch(changeGameRunningStatus(true));
  };

  return (
    <Button onClick={handleNewGame}>New game</Button>
  );
}
