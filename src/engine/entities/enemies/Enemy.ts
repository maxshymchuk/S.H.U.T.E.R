import { Entity } from '../Entity';
import { ASSET_TYPES, ENTITY_TYPES } from '../../../constants';
import repo from '../../../repo/RepoCollection';
import { IFrame } from '../../interfaces/features';

const SIZE = 100;

export class Enemy extends Entity {
  public readonly entityType = ENTITY_TYPES.ENEMY;

  constructor(x: number, y: number, frames: IFrame[]) {
    super(x, y, SIZE, SIZE, frames);
    this.direction = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.maxSpeed = 5;
  }
}
