import { IVector } from './features';
import { ENTITY_TYPE } from '../../constants';

export interface IEntityConfig extends IVector {
  type: ENTITY_TYPE;
}

export interface IAssetConfig {
  type: ENTITY_TYPE;
  src: string,
  x: number;
  y: number;
  width: number,
  height: number,
  spriteWidth: number;
  spriteHeight: number;
}

export interface ISoundConfig {
  type: ENTITY_TYPE;
  src: string,
}