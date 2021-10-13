import { Entity } from '../entities/Entity';
import { IRender } from '../../render/interfaces';

export interface IEngineParams {
  tickrate?: number;
  render?: IRender;
}

export interface IEngine {
  entities: Entity[];
  tickCount: number;
  render: IRender;
  start: () => void;
  stop: () => void;
}

export interface IGameState {
  tickCount: number;
}
