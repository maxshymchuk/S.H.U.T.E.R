import { Entity } from '../Entity';
import { createImageByUrl } from '../../../utils';
import { ENTITY_TYPE } from '../../../constants';

const ship = require('../../../assets/enemy.png');

const hitbox = [
  { x: 300, y: 0 },
  { x: 700, y: 0 },
  { x: 900, y: 450 },
  { x: 900, y: 650 },
  { x: 600, y: 1000 },
  { x: 400, y: 1000 },
  { x: 100, y: 650 },
  { x: 100, y: 450 },
  { x: 300, y: 0 },
];

const texture = createImageByUrl(ship);

export class Enemy extends Entity {
  public readonly entityType = ENTITY_TYPE.ENEMY;

  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, width, height, texture, hitbox);
    this.direction = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.maxSpeed = 5;
  }
}
