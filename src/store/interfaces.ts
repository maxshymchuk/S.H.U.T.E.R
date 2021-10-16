import { IGameState } from '../engine/interfaces/engine';
import { RepoStatuses } from '../repo/interfaces';

export enum Actions {
  CHANGE_REPO_STATUS = 'CHANGE_REPO_STATUS',
  CHANGE_GAME_STARTED_STATUS = 'CHANGE_GAME_STARTED_STATUS',
  CHANGE_GAME_RUNNING_STATUS = 'CHANGE_GAME_RUNNING_STATUS',
  UPDATE_GAME_STATE = 'UPDATE_GAME_STATE',
}

export interface IState {
  gameState: IGameState;
  repoStatus: RepoStatuses;
  isGameStarted: boolean;
  isGameRunning: boolean;
}