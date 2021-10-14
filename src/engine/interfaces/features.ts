import { ENTITY_TYPE } from '../../constants';

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
  readonly entityType: ENTITY_TYPE;
  texture: Promise<IImage>;
  hitbox: IVector[];
  limits: IDimension;
  isWithCollision: boolean;
}

export interface ISlave {
  master: IEntity;
}

export interface IImage {
  source: HTMLImageElement;
  originalWidth: number;
  originalHeight: number;
}
