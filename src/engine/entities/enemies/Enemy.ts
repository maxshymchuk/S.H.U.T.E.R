import { Entity } from '../Entity';
import { ASSET_TYPES, ENTITY_TYPES } from '../../../constants';
import repo from '../../../repo/RepoCollection';
import { IAsset } from '../../interfaces/features';

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

function extractSprites() {
  return repo.getAssets(ASSET_TYPES.SHIPS).map<IAsset>(asset => ({
    ...asset,
    x: 0,
    y: 0,
  }));
}

export class Enemy extends Entity {
  public readonly entityType = ENTITY_TYPES.ENEMY;

  constructor(x: number, y: number) {
    super(x, y, SIZE, SIZE, extractSprites(), hitbox);
    this.direction = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.maxSpeed = 5;
  }
}
