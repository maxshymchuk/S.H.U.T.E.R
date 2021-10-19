import React from 'react';
import { Button } from '../../../styles/styles';
import { useDispatch } from 'react-redux';
import { changeGameRunningStatus, changeGameStartedStatus } from '../../../store/actions';

export default function ButtonMainMenu() {
  const dispatch = useDispatch();

  const handleGameReset = () => {
    dispatch(changeGameStartedStatus(false));
    dispatch(changeGameRunningStatus(false));
  };

  return (
    <Button onClick={handleGameReset}>Main Menu</Button>
  );
}
