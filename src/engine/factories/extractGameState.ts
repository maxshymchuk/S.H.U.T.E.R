import { IEngine, IGameState } from '../interfaces/engine';

export function extractGameState(game: IEngine): IGameState {
  return {
    tickCount: game.tickCount,
  };
}
