import { IAssetConfig, IEntityConfig } from './engine/interfaces/configs';
import { ENTITY_TYPE } from './constants';

const ships = require('./assets/sprites.png');

export const entitiesConfig: IEntityConfig[] = [
  {
    type: ENTITY_TYPE.PLAYER,
    x: 100,
    y: 100,
  },
  {
    type: ENTITY_TYPE.ENEMY,
    x: 200,
    y: 200,
  },
  {
    type: ENTITY_TYPE.ENEMY,
    x: 400,
    y: 200,
  },
];

export const assetsConfig: IAssetConfig[] = [
  {
    type: ENTITY_TYPE.PLAYER,
    src: ships,
    x: 0,
    y: 1000,
    width: 3000,
    height: 1000,
    spriteWidth: 1000,
    spriteHeight: 1000,
  },
  {
    type: ENTITY_TYPE.ENEMY,
    src: ships,
    x: 0,
    y: 0,
    width: 3000,
    height: 1000,
    spriteWidth: 1000,
    spriteHeight: 1000,
  },
];
