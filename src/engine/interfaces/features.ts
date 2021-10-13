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

export interface IEntity extends IElement {
  color: string;
  hitbox: IVector[];
  isWithCollision: boolean;
}
