import { Entity } from '../Entity';

export class Enemy extends Entity {
  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, width, height, '#990000', [
      { x: 0, y: 0 },
      { x: width, y: 0 },
      { x: width, y: height },
      { x: 0, y: height },
      { x: 0, y: 0 },
    ]);
    this.direction = { x: Math.random(), y: Math.random() };
    this.acceleration = { x: 1, y: 1 };
    this.maxSpeed = 5;
  }
}
