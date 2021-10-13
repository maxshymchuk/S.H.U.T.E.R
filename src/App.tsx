import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import Interface from './components/Interface/Interface';
import Canvas from './components/Canvas/Canvas';
import Controls from './components/Controls/Controls';
import Loader from './components/Loader/Loader';
import game from './engine/Engine';
import { configToEntities } from './engine/factories/configToEntities';
import { entitiesConfig } from './configs';
import { useDispatch } from 'react-redux';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export default function App() {
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);

  useLayoutEffect(() => {
    game.entities = configToEntities(entitiesConfig);
    game.dispatch = dispatch;
    // setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <StyledApp>
      <Canvas />
      <Interface />
      <Controls />
      {isLoading && <Loader />}
    </StyledApp>
  );
}
