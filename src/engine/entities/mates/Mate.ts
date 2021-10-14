import { Entity } from '../Entity';
import { IEntity, ISlave } from '../../interfaces/features';
import { createImageByUrl } from '../../../utils';
import { ENTITY_TYPE } from '../../../constants';

const ship = require('../../../assets/player.png');

const hitbox = [
  { x: 0, y: 0 },
  { x: 1000, y: 0 },
  { x: 1000, y: 1000 },
  { x: 0, y: 1000 },
  { x: 0, y: 0 },
];

const texture = createImageByUrl(ship);

export class Mate extends Entity implements ISlave {
  public readonly entityType = ENTITY_TYPE.MATE;

  constructor(x: number, y: number, width: number, height: number, master: IEntity) {
    super(x, y, width, height, texture, hitbox);
    this._master = master;
    this.speed = master.speed;
    this.acceleration = master.acceleration;
    this.maxSpeed = master.maxSpeed;
    this.friction = master.friction;
  }

  private _master: IEntity = null;

  public get master(): IEntity {
    return this._master;
  }

  public set master(master: IEntity) {
    this._master = master;
  }
}
