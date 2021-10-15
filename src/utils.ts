import { IEntity, IImage } from './engine/interfaces/features';
import { ENTITY_TYPE, THEME } from './constants';

export function stylizeText(text: string) {
  return text.split('').join('.');
}

export function between(test: number, min: number, max: number) {
  if (test < min) return min;
  if (test > max) return max;
  return test;
}

// TODO Create REPO for all images, wait until its init
export async function createImageByUrl(url: string): Promise<IImage> {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = url;
    const poll = setInterval(() => {
      if (image.naturalWidth && image.naturalHeight) {
        clearInterval(poll);
        resolve({
          source: image,
          originalWidth: image.naturalWidth,
          originalHeight: image.naturalHeight,
        })
      }
    }, 10);
  });
}

export function getColorByEntity(entity: IEntity) {
  if (entity.entityType === ENTITY_TYPE.PLAYER) return THEME.PLAYER_COLOR;
  if (entity.entityType === ENTITY_TYPE.ENEMY) return THEME.ENEMY_COLOR;
  if (entity.entityType === ENTITY_TYPE.MATE) return THEME.MATE_COLOR;
  return 'transparent';
}