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
  minSpeed: number;
}

export interface IEntity extends IElement, IMovable {
  color: string;
  hitbox: IVector[];
  limits: IDimension;
  isWithCollision: boolean;
}

export interface ISlave {
  master: IEntity;
}
