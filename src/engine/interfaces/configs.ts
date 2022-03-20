import { IHitbox, IVector } from './features';
import { ASSET_TYPES, ENTITY_TYPES, FRAME_STATES, SOUND_TYPES } from '../../constants';

export interface IEntityConfig extends IVector {
  type: ENTITY_TYPES;
}

export interface IAssetConfig {
  type: ASSET_TYPES;
  src: string,
  frames: IFrameConfig[];
}

export interface ISoundConfig {
  type: SOUND_TYPES;
  src: string,
}

export interface IFrameConfig {
  id: string;
  type: ENTITY_TYPES;
  state: FRAME_STATES;
  x: number;
  y: number;
  width: number;
  height: number;
  hitbox: IHitbox[];
}