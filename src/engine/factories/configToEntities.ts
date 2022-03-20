import { Entity } from '../entities/Entity';
import { ASSET_TYPES, ENTITY_TYPES } from '../../constants';
import { Player } from '../entities/players/Player';
import { Enemy } from '../entities/enemies/Enemy';
import { IEntityConfig } from '../interfaces/configs';
import repo from '../../repo/RepoCollection';

export function configToEntities(entities: IEntityConfig[]): Entity[] {
  return entities.map(entity => {
    switch (entity.type) {
      case ENTITY_TYPES.PLAYER:
        return new Player(entity.x, entity.y, repo.getAssets(ASSET_TYPES.SHIPS)[0].frames.filter(frame => frame.entityType === ENTITY_TYPES.PLAYER));
      case ENTITY_TYPES.ENEMY:
        return new Enemy(entity.x, entity.y, repo.getAssets(ASSET_TYPES.SHIPS)[0].frames.filter(frame => frame.entityType === ENTITY_TYPES.PLAYER));
    }
  });
}
