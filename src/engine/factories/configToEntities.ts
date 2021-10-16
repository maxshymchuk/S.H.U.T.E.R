import { Entity } from '../entities/Entity';
import { ENTITY_TYPE } from '../../constants';
import { Player } from '../entities/players/Player';
import { Enemy } from '../entities/enemies/Enemy';
import { IEntityConfig } from '../interfaces/configs';

export function configToEntities(entities: IEntityConfig[]): Entity[] {
  return entities.map(entity => {
    switch (entity.type) {
      case ENTITY_TYPE.PLAYER:
        return new Player(entity.x, entity.y);
      case ENTITY_TYPE.ENEMY:
        return new Enemy(entity.x, entity.y);
    }
  });
}
