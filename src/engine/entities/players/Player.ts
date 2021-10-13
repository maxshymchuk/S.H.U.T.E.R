import { Entity } from '../Entity';

export class Player extends Entity {

  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, width, height, '#009900', [
      { x: 0, y: 0 },
      { x: width, y: 0 },
      { x: width, y: height },
      { x: 0, y: height },
      { x: 0, y: 0 },
    ]);
    this.acceleration = { x: 1, y: 1 };
    this.minSpeed = -15;
    this.maxSpeed = 15;
    this.friction = 0.9;
  }
}
