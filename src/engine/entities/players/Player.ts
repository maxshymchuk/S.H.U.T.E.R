import { Entity } from '../Entity';
import { ASSET_TYPES, CANVAS_ID, ENTITY_TYPES } from '../../../constants';
import repo from '../../../repo/RepoCollection';
import { IAsset } from '../../interfaces/features';

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

function extractSprites() {
  return repo.getAssets(ASSET_TYPES.SHIPS).map<IAsset>(asset => ({
    ...asset,
    x: 0,
    y: 1000,
  }));
}

export class Player extends Entity {
  public readonly entityType = ENTITY_TYPES.PLAYER;

  constructor(x: number, y: number) {
    super(x, y, SIZE, SIZE, extractSprites(), hitbox);
    this.acceleration = { x: 1, y: 1 };
    this.maxSpeed = 15;
    this.friction = 0.9;
    this.limits = document.getElementById(CANVAS_ID)?.getBoundingClientRect();
  }
}
