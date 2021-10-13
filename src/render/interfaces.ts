import { IEngine } from '../engine/interfaces/engine';

export interface IRender {
  targetId: string;
  draw: (game: IEngine) => void;
  clear: () => void;
}

export interface IRenderParams {
  targetId?: string;
}