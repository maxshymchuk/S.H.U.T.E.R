import { Entity } from '../Entity';

export class Player extends Entity {

  constructor(x: number, y: number, width: number, height: number) {
    const hitbox = [
      { x: 0, y: 0 },
      { x: width, y: 0 },
      { x: width, y: height },
      { x: 0, y: height },
      { x: 0, y: 0 },
    ];
    super(x, y, width, height, '#009900', hitbox);
  }
}
