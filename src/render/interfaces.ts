import { IEngine } from '../engine/interfaces/engine';

export interface IRender {
  targetId: string;
  drawFrame: (game: IEngine) => void;
  clear: () => void;
}

export interface IRenderParams {
  targetId?: string;
}