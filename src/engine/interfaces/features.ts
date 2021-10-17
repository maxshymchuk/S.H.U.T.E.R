import { ENTITY_TYPES, SOUND_TYPES } from '../../constants';
import { IRepoAsset } from '../../repo/interfaces';

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
  assets: IAsset[];
  hitbox: IVector[];
  limits: IDimension;
  isWithCollision: boolean;
}

export interface IAsset extends IRepoAsset {
  x: number;
  y: number;
}

export interface ISound {
  type: SOUND_TYPES;
}
