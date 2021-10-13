import { Entity } from '../Entity';
import { IEntity, ISlave } from '../../interfaces/features';

export class Mate extends Entity implements ISlave {
  private _master: IEntity = null;

  constructor(x: number, y: number, width: number, height: number, master: IEntity) {
    super(x, y, width, height, '#000099', [
      { x: 0, y: 0 },
      { x: width, y: 0 },
      { x: width, y: height },
      { x: 0, y: height },
      { x: 0, y: 0 },
    ]);
    this._master = master;
    this.speed = master.speed;
    this.acceleration = master.acceleration;
    this.minSpeed = master.minSpeed;
    this.maxSpeed = master.maxSpeed;
    this.friction = master.friction;
  }

  public get master(): IEntity {
    return this._master;
  }

  public set master(master: IEntity) {
    this._master = master;
  }
}
