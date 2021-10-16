import React from 'react';
import { WindowControls } from '../../../../styles/styles';
import Subtitle from '../../shared/Subtitle/Subtitle';

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
