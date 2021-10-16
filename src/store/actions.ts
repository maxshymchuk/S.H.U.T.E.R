import { IGameState } from '../engine/interfaces/engine';
import { Actions } from './interfaces';
import { RepoStatuses } from '../repo/interfaces';

export function changeRepoLoadedStatus(status: RepoStatuses) {
  return {
    type: Actions.CHANGE_REPO_STATUS,
    payload: status,
  } as const;
}

export function changeGameStartedStatus(status: boolean) {
  return {
    type: Actions.CHANGE_GAME_STARTED_STATUS,
    payload: status,
  } as const;
}

export function changeGameRunningStatus(status: boolean) {
  return {
    type: Actions.CHANGE_GAME_RUNNING_STATUS,
    payload: status,
  } as const;
}

export function updateGameState(game: IGameState) {
  return {
    type: Actions.UPDATE_GAME_STATE,
    payload: game,
  } as const;
}
