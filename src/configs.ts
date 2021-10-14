import { IEntityConfig } from './engine/interfaces/configs';
import { ENTITY_TYPE } from './constants';

export const entitiesConfig: IEntityConfig[] = [
  {
    type: ENTITY_TYPE.PLAYER,
    x: 100,
    y: 100,
    width: 100,
    height: 100,
  },
  {
    type: ENTITY_TYPE.ENEMY,
    x: 200,
    y: 200,
    width: 100,
    height: 100,
  },
  {
    type: ENTITY_TYPE.ENEMY,
    x: 400,
    y: 200,
    width: 100,
    height: 100,
  },
];
