import React from 'react';
import { WindowControls } from '../../../styles';
import Subtitle from '../../Subtitle/Subtitle';

export default function Overview() {
  return (
    <>
      <Subtitle title='Overview' />
      <WindowControls>
        Points, time and some crap about game, player, etc.
      </WindowControls>
    </>
  );
}
