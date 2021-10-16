import { IAssetConfig, IEntityConfig } from './engine/interfaces/configs';
import { ENTITY_TYPE } from './constants';

const player_sprites = require('./assets/player_sprites.png');

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
    src: player_sprites,
    width: 3000,
    height: 1000,
    spriteWidth: 1000,
    spriteHeight: 1000,
  },
  {
    type: ENTITY_TYPE.ENEMY,
    src: player_sprites,
    width: 3000,
    height: 1000,
    spriteWidth: 1000,
    spriteHeight: 1000,
  },
];
