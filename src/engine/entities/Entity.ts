import { IEntity, IVector } from '../interfaces/features';
import { between } from '../../utils';

export abstract class Entity implements IEntity {
  private _vector: IVector;

  protected constructor(x: number, y: number, width: number, height: number, color: string, hitbox?: IVector[]) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.hitbox = hitbox;
  }

  private _x: number;

  public get x(): number {
    return this._x;
  }

  public set x(x: number) {
    this._x = x;
  }

  private _y: number;

  public get y(): number {
    return this._y;
  }

  public set y(y: number) {
    this._y = y;
  }

  private _width: number;

  public get width(): number {
    return this._width;
  }

  public set width(width: number) {
    this._width = width;
  }

  private _height: number;

  public get height(): number {
    return this._height;
  }

  public set height(height: number) {
    this._height = height;
  }

  private _color: string;

  public get color(): string {
    return this._color;
  }

  public set color(color: string) {
    this._color = color;
  }

  private _hitbox: IVector[];

  public set hitbox(hitbox: IVector[]) {
    const limitedHitbox = hitbox?.map(vertice => ({
      x: between(vertice.x, 0, this.width),
      y: between(vertice.y, 0, this.height),
    }));
    this._hitbox = limitedHitbox || null;
    this._isWithCollision = !!this._hitbox;
  }

  private _isWithCollision: boolean;

  public get isWithCollision(): boolean {
    return this._isWithCollision;
  }

  public tick() {
    console.log(this.constructor.name);
  }
}
