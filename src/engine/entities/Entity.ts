import { IDimension, IEntity, IImage, IVector } from '../interfaces/features';
import { between } from '../../utils';
import { ENTITY_TYPE, MINIMAL_SPEED } from '../../constants';

export abstract class Entity implements IEntity {
  public abstract readonly entityType: ENTITY_TYPE;

  protected constructor(x: number, y: number, width: number, height: number, texture: IImage, hitbox?: IVector[]) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.texture = texture;
    this.hitbox = hitbox;
  }

  private _limits = null;

  public get limits(): IDimension {
    return this._limits;
  }

  public set limits(limits: IDimension) {
    this._limits = limits || null;
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

  private _texture: IImage;

  public get texture(): IImage {
    return this._texture;
  }

  public set texture(texture: IImage) {
    this._texture = texture;
  }

  private _hitbox: IVector[];

  public get hitbox(): IVector[] {
    return this._hitbox;
  }

  public set hitbox(hitbox: IVector[]) {
    const limitedHitbox = hitbox?.map(vertice => ({
      x: between(vertice.x, 0, this.texture.originalWidth),
      y: between(vertice.y, 0, this.texture.originalHeight),
    }));
    this._hitbox = limitedHitbox || null;
    this._isWithCollision = !!this._hitbox;
  }

  private _isWithCollision: boolean;

  public get isWithCollision(): boolean {
    return this._isWithCollision;
  }

  public tick() {
    const newSpeedX = this.speed.x + this.direction.x * this.acceleration.x
    const newSpeedY = this.speed.y + this.direction.y * this.acceleration.y
    this.speed.x = +(between(newSpeedX, -this.maxSpeed, this.maxSpeed) * this.friction).toFixed(3);
    this.speed.y = +(between(newSpeedY, -this.maxSpeed, this.maxSpeed) * this.friction).toFixed(3);
    if (Math.abs(this.speed.x) < MINIMAL_SPEED) this.speed.x = 0;
    if (Math.abs(this.speed.y) < MINIMAL_SPEED) this.speed.y = 0;
    const newX = this.x + this.speed.x;
    const newY = this.y + this.speed.y;
    this.x = this.limits ? between(newX, 0, this.limits.width - this.width) : newX;
    this.y = this.limits ? between(newY, 0, this.limits.height - this.height) : newY;
  }
}
