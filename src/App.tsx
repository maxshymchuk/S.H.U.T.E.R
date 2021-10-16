import React, { useEffect, useLayoutEffect, useMemo } from 'react';
import styled from 'styled-components';
import Interface from './components/Interface/Interface';
import Canvas from './components/Canvas/Canvas';
import Controls from './components/Controls/Controls';
import Loader from './components/Interface/shared/Loader/Loader';
import game from './engine/Engine';
import { configToEntities } from './engine/factories/configToEntities';
import { assetsConfig, entitiesConfig } from './configs';
import { useDispatch, useSelector } from 'react-redux';
import repo from './repo/Repo';
import { IRootState } from './store/store';
import { changeRepoLoadedStatus } from './store/actions';
import { RepoStatuses } from './repo/interfaces';

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

  const repoStatus = useSelector((store: IRootState) => store.repoStatus);

  const isRepoLoaded = useMemo(() => repoStatus === RepoStatuses.LOADED, [repoStatus]);

  useEffect(() => {
    repo.setAssets(assetsConfig);
    repo.init().then(() => {
      dispatch(changeRepoLoadedStatus(RepoStatuses.LOADED));
    }).catch(() => {
      dispatch(changeRepoLoadedStatus(RepoStatuses.ERROR));
    });
  }, []);

  useLayoutEffect(() => {
    if (repoStatus === RepoStatuses.ERROR) throw 'Cannot init repository';
  }, [repoStatus]);

  useLayoutEffect(() => {
    if (!isRepoLoaded) return;
    game.entities = configToEntities(entitiesConfig);
    game.dispatch = dispatch;
  }, [isRepoLoaded]);

  return isRepoLoaded ? (
    <StyledApp>
      <Canvas />
      <Interface />
      <Controls />
    </StyledApp>
  ) : (
    <Loader />
  );
}
