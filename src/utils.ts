import { IEntity, IImage } from './engine/interfaces/features';
import { ENTITY_TYPE, THEME } from './constants';

export function between(test: number, min: number, max: number) {
  if (test < min) return min;
  if (test > max) return max;
  return test;
}

export function createImageByUrl(url: string): IImage {
  const image = new Image();
  image.src = url;
  return {
    source: image,
    originalWidth: image.width,
    originalHeight: image.height,
  };
}

export function getColorByEntity(entity: IEntity) {
  if (entity.entityType === ENTITY_TYPE.PLAYER) return THEME.PLAYER_COLOR;
  if (entity.entityType === ENTITY_TYPE.ENEMY) return THEME.ENEMY_COLOR;
  if (entity.entityType === ENTITY_TYPE.MATE) return THEME.MATE_COLOR;
  return 'transparent';
}