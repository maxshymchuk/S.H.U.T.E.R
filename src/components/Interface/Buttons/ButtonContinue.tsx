import React from 'react';
import { Button } from '../../../styles';
import { useDispatch } from 'react-redux';
import { changeGameRunningStatus } from '../../../store/actions';
import game from '../../../engine/Engine';

export default function ButtonContinue() {
  const dispatch = useDispatch();

  const handleGameContinue = () => {
    dispatch(changeGameRunningStatus(true));
    game.start();
  };


  return (
    <Button onClick={handleGameContinue}>Continue</Button>
  );
}
