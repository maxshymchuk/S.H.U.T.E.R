import { IGameState } from '../engine/interfaces/engine';

export enum Actions {
  CHANGE_GAME_STARTED_STATUS = 'CHANGE_GAME_STARTED_STATUS',
  CHANGE_GAME_RUNNING_STATUS = 'CHANGE_GAME_RUNNING_STATUS',
  UPDATE_GAME_STATE = 'UPDATE_GAME_STATE',
}

export interface IState {
  gameState: IGameState;
  isGameStarted: boolean;
  isGameRunning: boolean;
}