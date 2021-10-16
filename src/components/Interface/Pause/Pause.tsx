import React from 'react';
import { Overlay, Window, WindowControls } from '../../../styles/styles';
import GlitchTitle from '../GlitchTitle/GlitchTitle';
import PerspectiveDistortion from '../PerspectiveDistortion/PerspectiveDistortion';
import Overview from '../Overview/Overview';
import ButtonMainMenu from '../Buttons/ButtonMainMenu';
import ButtonContinue from '../Buttons/ButtonContinue';

export default function Pause() {
  return (
    <>
      <Overlay />
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
    </>
  );
}
