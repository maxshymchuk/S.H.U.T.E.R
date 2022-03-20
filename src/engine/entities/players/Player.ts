import { Entity } from '../Entity';
import { ASSET_TYPES, CANVAS_ID, ENTITY_TYPES } from '../../../constants';
import repo from '../../../repo/RepoCollection';
import { IFrame } from '../../interfaces/features';

const SIZE = 200;

export class Player extends Entity {
  public readonly entityType = ENTITY_TYPES.PLAYER;

  constructor(x: number, y: number, frames: IFrame[]) {
    super(x, y, SIZE, SIZE, frames);
    this.acceleration = { x: 1, y: 1 };
    this.maxSpeed = 15;
    this.friction = 0.9;
    this.limits = document.getElementById(CANVAS_ID)?.getBoundingClientRect();
  }
}
