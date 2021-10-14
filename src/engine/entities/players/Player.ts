import { Entity } from '../Entity';
import { CANVAS_ID, ENTITY_TYPE } from '../../../constants';
import { createImageByUrl } from '../../../utils';

const ship = require('../../../assets/player.png');

const hitbox = [
  { x: 400, y: 0 },
  { x: 600, y: 0 },
  { x: 650, y: 500 },
  { x: 900, y: 750 },
  { x: 900, y: 1000 },
  { x: 100, y: 1000 },
  { x: 100, y: 750 },
  { x: 350, y: 500 },
  { x: 400, y: 0 },
];

const texture = createImageByUrl(ship);

export class Player extends Entity {
  public readonly entityType = ENTITY_TYPE.PLAYER;

  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, width, height, texture, hitbox);
    this.acceleration = { x: 1, y: 1 };
    this.maxSpeed = 15;
    this.friction = 0.9;
    this.limits = document.getElementById(CANVAS_ID)?.getBoundingClientRect();
  }
}
