import React from 'react';
import { Button } from '../../../styles/styles';
import { useDispatch } from 'react-redux';
import { changeGameRunningStatus } from '../../../store/actions';

export default function ButtonContinue() {
  const dispatch = useDispatch();

  const handleGameContinue = () => {
    dispatch(changeGameRunningStatus(true));
  };

  return (
    <Button onClick={handleGameContinue}>Continue</Button>
  );
}
