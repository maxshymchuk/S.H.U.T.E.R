import React from 'react';
import styled from 'styled-components';
import { Window, WindowControls } from '../../../../styles/styles';
import { GAME_TITLE } from '../../../../constants';
import GlitchTitle from '../../shared/GlitchTitle/GlitchTitle';
import PerspectiveDistortion from '../../shared/PerspectiveDistortion/PerspectiveDistortion';
import ButtonSaveLoad from '../../buttons/ButtonSaveLoad';
import ButtonLevels from '../../buttons/ButtonLevels';
import ButtonAbout from '../../buttons/ButtonAbout';
import ButtonStats from '../../buttons/ButtonStats';
import ButtonNewGame from '../../buttons/ButtonNewGame';

const spaceship = require('../../../../assets/interface/spaceship.png');

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

export default function MainMenu() {
  return (
    <>
      <Spaceship />
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
