import { IAssetConfig, IEntityConfig, ISoundConfig } from './engine/interfaces/configs';
import { ASSET_TYPES, ENTITY_TYPES, SOUND_TYPES } from './constants';

const ships = require('./assets/sprites.png');

export const entitiesConfig: IEntityConfig[] = [
  {
    type: ENTITY_TYPES.PLAYER,
    x: 100,
    y: 100,
  },
  {
    type: ENTITY_TYPES.ENEMY,
    x: 200,
    y: 200,
  },
  {
    type: ENTITY_TYPES.ENEMY,
    x: 400,
    y: 200,
  },
];

export const assetsConfig: IAssetConfig[] = [
  {
    type: ASSET_TYPES.SHIPS,
    src: ships,
    width: 3000,
    height: 1000,
    spriteWidth: 1000,
    spriteHeight: 1000,
  },
];

export const soundsConfig: ISoundConfig[] = [
  {
    type: SOUND_TYPES.SHIPS,
    src: '',
  },
];
