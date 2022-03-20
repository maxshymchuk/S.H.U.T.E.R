import { IAssetConfig, IEntityConfig, ISoundConfig } from './engine/interfaces/configs';
import { ASSET_TYPES, ENTITY_TYPES, FRAME_STATES, SOUND_TYPES } from './constants';

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
    frames: [
      {
        type: ENTITY_TYPES.PLAYER,
        id: '0',
        x: 0,
        y: 1000,
        width: 1000,
        height: 1000,
        state: FRAME_STATES.SHIFT_LEFT,
        hitbox: [
          { x: 0.40, y: 0 },
          { x: 0.60, y: 0 },
          { x: 0.65, y: 0.50 },
          { x: 0.90, y: 0.75 },
          { x: 0.90, y: 1 },
          { x: 0.10, y: 1 },
          { x: 0.10, y: 0.75 },
          { x: 0.35, y: 0.50 },
          { x: 0.40, y: 0 },
        ]
      },
      {
        type: ENTITY_TYPES.PLAYER,
        id: '0',
        x: 1000,
        y: 1000,
        width: 1000,
        height: 1000,
        state: FRAME_STATES.DEFAULT,
        hitbox: [
          { x: 0.40, y: 0 },
          { x: 0.60, y: 0 },
          { x: 0.65, y: 0.50 },
          { x: 0.90, y: 0.75 },
          { x: 0.90, y: 1 },
          { x: 0.10, y: 1 },
          { x: 0.10, y: 0.75 },
          { x: 0.35, y: 0.50 },
          { x: 0.40, y: 0 },
        ]
      },
      {
        type: ENTITY_TYPES.PLAYER,
        id: '0',
        x: 2000,
        y: 1000,
        width: 1000,
        height: 1000,
        state: FRAME_STATES.SHIFT_RIGHT,
        hitbox: [
          { x: 0.40, y: 0 },
          { x: 0.60, y: 0 },
          { x: 0.65, y: 0.50 },
          { x: 0.90, y: 0.75 },
          { x: 0.90, y: 1 },
          { x: 0.10, y: 1 },
          { x: 0.10, y: 0.75 },
          { x: 0.35, y: 0.50 },
          { x: 0.40, y: 0 },
        ]
      },
      {
        type: ENTITY_TYPES.ENEMY,
        id: '1',
        x: 0,
        y: 0,
        width: 1000,
        height: 1000,
        state: FRAME_STATES.SHIFT_LEFT,
        hitbox: [
          { x: 0.30, y: 0 },
          { x: 0.70, y: 0 },
          { x: 0.90, y: 0.45 },
          { x: 0.90, y: 0.65 },
          { x: 0.60, y: 1 },
          { x: 0.40, y: 1 },
          { x: 0.10, y: 0.65 },
          { x: 0.10, y: 0.45 },
          { x: 0.30, y: 0 },
        ]
      },
      {
        type: ENTITY_TYPES.ENEMY,
        id: '1',
        x: 1000,
        y: 0,
        width: 1000,
        height: 1000,
        state: FRAME_STATES.DEFAULT,
        hitbox: [
          { x: 0.30, y: 0 },
          { x: 0.70, y: 0 },
          { x: 0.90, y: 0.45 },
          { x: 0.90, y: 0.65 },
          { x: 0.60, y: 1 },
          { x: 0.40, y: 1 },
          { x: 0.10, y: 0.65 },
          { x: 0.10, y: 0.45 },
          { x: 0.30, y: 0 },
        ]
      },
      {
        type: ENTITY_TYPES.ENEMY,
        id: '1',
        x: 2000,
        y: 0,
        width: 1000,
        height: 1000,
        state: FRAME_STATES.SHIFT_RIGHT,
        hitbox: [
          { x: 0.30, y: 0 },
          { x: 0.70, y: 0 },
          { x: 0.90, y: 0.45 },
          { x: 0.90, y: 0.65 },
          { x: 0.60, y: 1 },
          { x: 0.40, y: 1 },
          { x: 0.10, y: 0.65 },
          { x: 0.10, y: 0.45 },
          { x: 0.30, y: 0 },
        ]
      }
    ]
  },
];

export const soundsConfig: ISoundConfig[] = [
  {
    type: SOUND_TYPES.SHIPS,
    src: '',
  },
];
