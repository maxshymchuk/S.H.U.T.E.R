import { IVector } from './features';
import { ASSET_TYPES, ENTITY_TYPES } from '../../constants';

export interface IEntityConfig extends IVector {
  type: ENTITY_TYPES;
}

export interface IAssetConfig {
  type: ASSET_TYPES;
  src: string,
  width: number,
  height: number,
  spriteWidth: number;
  spriteHeight: number;
}

export interface ISoundConfig {
  type: ENTITY_TYPES;
  src: string,
}