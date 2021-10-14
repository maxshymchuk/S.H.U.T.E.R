import React, { useLayoutEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button, FullscreenAbsolute } from '../../../styles';
import { useDispatch } from 'react-redux';
import { changeGameRunningStatus, changeGameStartedStatus } from '../../../store/actions';
import game from '../../../engine/Engine';
import { GAME_TITLE } from '../../../constants';
import { IVector } from '../../../engine/interfaces/features';
import throttle from 'lodash.throttle';

const spaceship = require('../../../assets/interface/spaceship.png');

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  perspective: 100px;
`;

const StyledStart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 100px;
  box-sizing: border-box;
  transition: 0.1s transform;
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
`;

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

const Overlay = styled(FullscreenAbsolute)`
  pointer-events: none;
  background: radial-gradient(circle at 200px 50%, transparent 0%, #000 100%);
`;

const INTERVAL = 0.4;

export default function Start() {
  const dispatch = useDispatch();

  const [perspective, setPerspective] = useState<IVector>({ x: 0, y: 0 });

  const handleGameStart = () => {
    dispatch(changeGameStartedStatus(true));
    dispatch(changeGameRunningStatus(true));
    game.start();
  };

  useLayoutEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [])

  const throttled = throttle((e: React.MouseEvent) => {
    const bounds = document.body.getBoundingClientRect();
    const ratio: IVector = {
      x: INTERVAL / bounds.width,
      y: INTERVAL / bounds.height,
    }
    const y = +((e.clientX - bounds.width / 2) * ratio.x).toFixed(2);
    const x = -((e.clientY - bounds.height / 2) * ratio.y).toFixed(2);
    setPerspective({ x, y });
  }, 50);

  const handleMouseMove = (e: MouseEvent) => {
    throttled(e);
  };

  const style = useMemo(() => ({
    transform: `rotateX(${perspective.x}deg) rotateY(${perspective.y}deg)`,
  }), [perspective]);

  return (
    <Wrapper>
      <Spaceship />
      <StyledStart style={style}>
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
      </StyledStart>
      <Overlay />
    </Wrapper>
  );
}
