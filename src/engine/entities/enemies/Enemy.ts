import { Entity } from '../Entity';
import { createImageByUrl } from '../../../utils';
import { ENTITY_TYPE } from '../../../constants';

const ship = require('../../../assets/enemy.png');

const SIZE = 100;

const hitbox = [
  { x: 0.30, y: 0 },
  { x: 0.70, y: 0 },
  { x: 0.90, y: 0.45 },
  { x: 0.90, y: 0.65 },
  { x: 0.60, y: 1 },
  { x: 0.40, y: 1 },
  { x: 0.10, y: 0.65 },
  { x: 0.10, y: 0.45 },
  { x: 0.30, y: 0 },
];

const texture = createImageByUrl(ship);

export class Enemy extends Entity {
  public readonly entityType = ENTITY_TYPE.ENEMY;

  constructor(x: number, y: number) {
    super(x, y, SIZE, SIZE, texture, hitbox);
    this.direction = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.maxSpeed = 5;
  }
}
