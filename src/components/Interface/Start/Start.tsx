import React from 'react';
import styled from 'styled-components';
import { Overlay, Window, WindowControls } from '../../../styles/styles';
import { GAME_TITLE } from '../../../constants';
import GlitchTitle from '../GlitchTitle/GlitchTitle';
import PerspectiveDistortion from '../PerspectiveDistortion/PerspectiveDistortion';
import ButtonSaveLoad from '../Buttons/ButtonSaveLoad';
import ButtonLevels from '../Buttons/ButtonLevels';
import ButtonAbout from '../Buttons/ButtonAbout';
import ButtonStats from '../Buttons/ButtonStats';
import ButtonNewGame from '../Buttons/ButtonNewGame';

const spaceship = require('../../../assets/interface/spaceship.png');

const Spaceship = styled.div`
  width: 50%;
  height: 100%;
  padding: 100px 0;
  box-sizing: border-box;
  background: url(${spaceship}) no-repeat 50% 50%;
  background-size: contain;
  position: absolute;
  right: 100px;
`;

export default function Start() {
  return (
    <>
      <Spaceship />
      <Overlay />
      <PerspectiveDistortion>
        <Window left>
          <GlitchTitle title={GAME_TITLE} />
          <WindowControls>
            <ButtonNewGame />
            <ButtonSaveLoad />
            <ButtonLevels />
            <ButtonStats />
            <ButtonAbout />
          </WindowControls>
        </Window>
      </PerspectiveDistortion>
    </>
  );
}
