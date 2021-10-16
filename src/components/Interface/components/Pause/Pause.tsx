import React from 'react';
import { Window, WindowControls } from '../../../../styles/styles';
import GlitchTitle from '../../shared/GlitchTitle/GlitchTitle';
import PerspectiveDistortion from '../../shared/PerspectiveDistortion/PerspectiveDistortion';
import ButtonMainMenu from '../../buttons/ButtonMainMenu';
import ButtonContinue from '../../buttons/ButtonContinue';
import Overview from '../Overview/Overview';

export default function Pause() {
  return (
    <PerspectiveDistortion>
      <Window left>
        <GlitchTitle title='Pause' />
        <WindowControls>
          <ButtonContinue />
          <ButtonMainMenu />
        </WindowControls>
      </Window>
      <Window right>
        <Overview />
      </Window>
    </PerspectiveDistortion>
  );
}
