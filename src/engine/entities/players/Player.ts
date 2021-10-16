import { Entity } from '../Entity';
import { CANVAS_ID, ENTITY_TYPE } from '../../../constants';
import { createImageByUrl } from '../../../utils';

const ship = require('../../../assets/player.png');

const SIZE = 200;

const hitbox = [
  { x: 0.40, y: 0 },
  { x: 0.60, y: 0 },
  { x: 0.65, y: 0.50 },
  { x: 0.90, y: 0.75 },
  { x: 0.90, y: 1 },
  { x: 0.10, y: 1 },
  { x: 0.10, y: 0.75 },
  { x: 0.35, y: 0.50 },
  { x: 0.40, y: 0 },
];

const texture = createImageByUrl(ship);

export class Player extends Entity {
  public readonly entityType = ENTITY_TYPE.PLAYER;

  constructor(x: number, y: number) {
    super(x, y, SIZE, SIZE, texture, hitbox);
    this.acceleration = { x: 1, y: 1 };
    this.maxSpeed = 15;
    this.friction = 0.9;
    this.limits = document.getElementById(CANVAS_ID)?.getBoundingClientRect();
  }
}
