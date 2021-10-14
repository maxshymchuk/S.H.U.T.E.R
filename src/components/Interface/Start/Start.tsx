import React from 'react';
import styled from 'styled-components';
import { Button, FullscreenAbsolute } from '../../../styles';
import { useDispatch } from 'react-redux';
import { changeGameRunningStatus, changeGameStartedStatus } from '../../../store/actions';
import game from '../../../engine/Engine';
import { GAME_TITLE } from '../../../constants';
const spaceship = require('../../../assets/interface/spaceship.png');

const StyledStart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 100px;
  box-sizing: border-box;
`;

const Window = styled.div`
  display: flex;
  flex-direction: column;
  transform: matrix(1, -0.15, 0, 1, 0, 0);
  * {
    user-select: none;
  }
`;

const Controls = styled.div`
  > * {
    display: block;
    position: relative;
    left: 0;
    transition: 0.2s all;
    margin: 5px 0;
    &:hover {
      left: 10px;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
  
  h1 {
    text-align: center;
    color: #fff;
    font-size: 5em;
    letter-spacing: 8px;
    font-weight: 400;
    margin: 0;
    line-height: 0;
    animation: glitch1 2.5s infinite;
  }

  h1:nth-child(2) {
    color: #67f3da;
    animation: glitch2 2.5s infinite;
  }

  h1:nth-child(3) {
    color: #f16f6f;
    animation: glitch3 2.5s infinite;
  }

  @keyframes glitch1 {
    0% {
      transform: none;
      opacity: 1;
    }
    7% {
      transform: skew(-0.5deg, -0.9deg);
      opacity: 0.75;
    }
    10% {
      transform: none;
      opacity: 1;
    }
    27% {
      transform: none;
      opacity: 1;
    }
    30% {
      transform: skew(0.8deg, -0.1deg);
      opacity: 0.75;
    }
    35% {
      transform: none;
      opacity: 1;
    }
    52% {
      transform: none;
      opacity: 1;
    }
    55% {
      transform: skew(-1deg, 0.2deg);
      opacity: 0.75;
    }
    50% {
      transform: none;
      opacity: 1;
    }
    72% {
      transform: none;
      opacity: 1;
    }
    75% {
      transform: skew(0.4deg, 1deg);
      opacity: 0.75;
    }
    80% {
      transform: none;
      opacity: 1;
    }
    100% {
      transform: none;
      opacity: 1;
    }
  }

  @keyframes glitch2 {
    0% {
      transform: none;
      opacity: 0.25;
    }
    7% {
      transform: translate(-2px, -3px);
      opacity: 0.5;
    }
    10% {
      transform: none;
      opacity: 0.25;
    }
    27% {
      transform: none;
      opacity: 0.25;
    }
    30% {
      transform: translate(-5px, -2px);
      opacity: 0.5;
    }
    35% {
      transform: none;
      opacity: 0.25;
    }
    52% {
      transform: none;
      opacity: 0.25;
    }
    55% {
      transform: translate(-5px, -1px);
      opacity: 0.5;
    }
    50% {
      transform: none;
      opacity: 0.25;
    }
    72% {
      transform: none;
      opacity: 0.25;
    }
    75% {
      transform: translate(-2px, -6px);
      opacity: 0.5;
    }
    80% {
      transform: none;
      opacity: 0.25;
    }
    100% {
      transform: none;
      opacity: 0.25;
    }
  }

  @keyframes glitch3 {
    0% {
      transform: none;
      opacity: 0.25;
    }
    7% {
      transform: translate(2px, 3px);
      opacity: 0.5;
    }
    10% {
      transform: none;
      opacity: 0.25;
    }
    27% {
      transform: none;
      opacity: 0.25;
    }
    30% {
      transform: translate(5px, 2px);
      opacity: 0.5;
    }
    35% {
      transform: none;
      opacity: 0.25;
    }
    52% {
      transform: none;
      opacity: 0.25;
    }
    55% {
      transform: translate(5px, 1px);
      opacity: 0.5;
    }
    50% {
      transform: none;
      opacity: 0.25;
    }
    72% {
      transform: none;
      opacity: 0.25;
    }
    75% {
      transform: translate(2px, 6px);
      opacity: 0.5;
    }
    80% {
      transform: none;
      opacity: 0.25;
    }
    100% {
      transform: none;
      opacity: 0.25;
    }
  }
`;

const Spaceship = styled.div`
  width: 50%;
  height: 100%;
  padding: 100px 0;
  background: url(${spaceship}) no-repeat 50% 50%;
  background-size: contain;
  position: absolute;
  right: 100px;
`;

const Overlay = styled(FullscreenAbsolute)`
  pointer-events: none;
  background: radial-gradient(circle at 200px 50%, transparent 0%, #000 100%);
`;

export default function Start() {
  const dispatch = useDispatch();

  const handleGameStart = () => {
    dispatch(changeGameStartedStatus(true));
    dispatch(changeGameRunningStatus(true));
    game.start();
  };

  return (
    <StyledStart>
      <Spaceship />
      <Window>
        <Logo>
          <h1>{GAME_TITLE}</h1>
          <h1>{GAME_TITLE}</h1>
          <h1>{GAME_TITLE}</h1>
        </Logo>
        <Controls>
          <Button onClick={handleGameStart}>Start</Button>
          <Button>Save/Load</Button>
          <Button>Levels</Button>
          <Button>Stats</Button>
          <Button>About</Button>
        </Controls>
      </Window>
      <Overlay />
    </StyledStart>
  );
}
