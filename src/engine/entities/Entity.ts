import { IEntity, IVector } from '../interfaces/features';
import { between } from '../../utils';

export abstract class Entity implements IEntity {
  protected constructor(x: number, y: number, width: number, height: number, color: string, hitbox?: IVector[]) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.hitbox = hitbox;
  }

  private _friction = 1;

  public get friction(): number {
    return this._friction;
  }

  public set friction(friction: number) {
    this._friction = between(friction, 0, 1);
  }

  private _acceleration: IVector = { x: 0, y: 0 };

  public get acceleration(): IVector {
    return this._acceleration;
  }

  public set acceleration(acceleration: IVector) {
    this._acceleration = acceleration;
  }

  private _maxSpeed: number = Infinity;

  public get maxSpeed(): number {
    return this._maxSpeed;
  }

  public set maxSpeed(maxSpeed: number) {
    this._maxSpeed = maxSpeed;
  }

  private _minSpeed: number = -Infinity;

  public get minSpeed(): number {
    return this._minSpeed;
  }

  public set minSpeed(minSpeed: number) {
    this._minSpeed = minSpeed;
  }

  private _direction: IVector = { x: 0, y: 0 };

  public get direction(): IVector {
    return this._direction;
  }

  public set direction(direction: IVector) {
    this._direction.x = between(direction.x, -1, 1);
    this._direction.y = between(direction.y, -1, 1);
  }

  private _speed: IVector = { x: 0, y: 0 };

  public get speed(): IVector {
    return this._speed;
  }

  public set speed(speed: IVector) {
    this._speed = speed;
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
    this._width = between(width, 0, Infinity);
  }

  private _height: number;

  public get height(): number {
    return this._height;
  }

  public set height(height: number) {
    this._height = between(height, 0, Infinity);
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
    this.speed.x = between(this.speed.x += this.direction.x * this.acceleration.x, this.minSpeed, this.maxSpeed) * this.friction;
    this.speed.y = between(this.speed.y += this.direction.y * this.acceleration.y, this.minSpeed, this.maxSpeed) * this.friction;
    this.x += this.speed.x;
    this.y += this.speed.y;
  }
}
