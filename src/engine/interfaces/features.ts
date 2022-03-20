import { ENTITY_TYPES, SOUND_TYPES, FRAME_STATES, ASSET_TYPES } from '../../constants';
import { IRepoAsset } from '../../repo/interfaces';
import { IFrameConfig } from './configs';

export interface IDimension {
  width: number;
  height: number;
}

export interface IVector {
  x: number;
  y: number;
}

export interface IElement extends IDimension, IVector {
}

export interface IMovable {
  speed: IVector;
  direction: IVector;
  acceleration: IVector;
  friction: number;
  maxSpeed: number;
}

export interface IEntity extends IElement, IMovable {
  readonly entityType: ENTITY_TYPES;
  frames: IFrame[];
  limits: IDimension;
  isWithCollision: boolean;
}

export interface ISound {
  type: SOUND_TYPES;
}

export interface IHitbox extends IVector {}

export interface IFrame {
  id: string;
  sprites: HTMLImageElement;
  assetType: ASSET_TYPES;
  entityType: ENTITY_TYPES;
  state: FRAME_STATES;
  x: number;
  y: number;
  width: number;
  height: number;
  hitbox: IHitbox[];
  
}