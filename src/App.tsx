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
import repo from './repo/RepoCollection';
import { IRootState } from './store/store';
import { changeGameRunningStatus, changeRepoLoadedStatus } from './store/actions';
import { RepoStatuses } from './repo/interfaces';
import { ERRORS } from './constants';

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

  const isGameRunning = useSelector((store: IRootState) => store.isGameRunning);

  const repoStatus = useSelector((store: IRootState) => store.repoStatus);

  const isRepoLoaded = useMemo(() => repoStatus === RepoStatuses.LOADED, [repoStatus]);

  useEffect(() => {
    document.addEventListener('visibilitychange', handleWindowVisibility);
    repo.setAssets(assetsConfig);
    repo.init().then(() => {
      dispatch(changeRepoLoadedStatus(RepoStatuses.LOADED));
    }).catch(() => {
      dispatch(changeRepoLoadedStatus(RepoStatuses.ERROR));
    });
    return () => {
      document.removeEventListener('visibilitychange', handleWindowVisibility);
    }
  }, []);

  useLayoutEffect(() => {
    if (repoStatus === RepoStatuses.ERROR) throw ERRORS.REPO_INIT;
  }, [repoStatus]);

  useLayoutEffect(() => {
    if (!isRepoLoaded) return;
    game.entities = configToEntities(entitiesConfig);
    game.dispatch = dispatch;
  }, [isRepoLoaded]);

  useLayoutEffect(() => {
    if (isGameRunning) {
      game.start();
    } else {
      game.stop();
    }
  }, [isGameRunning])

  const handleWindowVisibility = () => {
    if (document.visibilityState === 'hidden') dispatch(changeGameRunningStatus(false));
  }

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
