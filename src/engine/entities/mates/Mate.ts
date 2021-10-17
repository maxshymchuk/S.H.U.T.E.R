import { Entity } from '../Entity';
import { IEntity, ISlave } from '../../interfaces/features';
import { ENTITY_TYPE } from '../../../constants';
import repo from '../../../repo/RepoCollection';

const SIZE = 100;

const hitbox = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 },
  { x: 0, y: 0 },
];

export class Mate extends Entity implements ISlave {
  public readonly entityType = ENTITY_TYPE.MATE;

  constructor(x: number, y: number, master: IEntity) {
    super(x, y, SIZE, SIZE, repo.assets[0], hitbox);
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
