import { IRender, IRenderParams } from './interfaces';
import { IEngine } from '../engine/interfaces/engine';
import { IAsset, IEntity } from '../engine/interfaces/features';
import { getColorByEntity } from '../utils';
import { ENTITY_TYPE } from '../constants';

export default class Render implements IRender {
  private _canvas: HTMLCanvasElement;
  private _context: CanvasRenderingContext2D;

  constructor(params?: IRenderParams) {
    if (params?.targetId) this.targetId = params.targetId;
  }

  public set targetId(id: string) {
    const target = document.getElementById(id);
    if (!target) throw 'Target not exist';
    this._init(target);
  }

  public clear() {
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

  public drawFrame(game: IEngine) {
    this.clear();
    game.entities.sort((entity) => entity.entityType === ENTITY_TYPE.PLAYER ? 1 : -1).forEach(entity => {
      // this._drawPlaceholder(entity);
      this._drawTexture(entity);
      // this._drawHitbox(entity);
    });
  }

  private _drawPlaceholder(entity: IEntity) {
    this._context.fillStyle = getColorByEntity(entity);
    this._context.fillRect(entity.x, entity.y, entity.width, entity.height);
  }

  private _rotate(entity: IEntity, degrees: number) {
    const cx = entity.x + entity.width / 2;
    const cy = entity.y + entity.height / 2;
    this._context.translate(cx, cy);
    this._context.rotate((Math.PI / 180) * degrees);
    this._context.translate(-cx, -cy);
  }

  private _tempAnimationTestExtractSpriteByDirection(entity: IEntity): IAsset {
    return {
      ...entity.asset,
      x: (entity.direction.x + 1) * entity.asset.spriteWidth,
    }
  }

  private _drawTexture(entity: IEntity) {
    if (!entity.asset) return;
    const asset = this._tempAnimationTestExtractSpriteByDirection(entity);
    if (entity.entityType === ENTITY_TYPE.ENEMY) {
      this._rotate(entity, 180);
      this._context.drawImage(asset.sprites, asset.x, asset.y, asset.spriteWidth, asset.spriteHeight, entity.x, entity.y, entity.width, entity.height);
      this._rotate(entity, -180);
      return;
    }
    this._context.drawImage(asset.sprites, asset.x, asset.y, asset.spriteWidth, asset.spriteHeight, entity.x, entity.y, entity.width, entity.height);
  }

  private _drawHitbox(entity: IEntity) {
    this._context.beginPath();
    this._context.strokeStyle = getColorByEntity(entity);
    this._context.lineWidth = 1;
    entity.hitbox.forEach(vertice => {
      if (entity.entityType === ENTITY_TYPE.ENEMY) {
        this._rotate(entity, 180);
        this._context.lineTo(entity.x + vertice.x * entity.width, entity.y + vertice.y * entity.width);
        this._rotate(entity, -180);
        return;
      }
      this._context.lineTo(entity.x + vertice.x * entity.width, entity.y + vertice.y * entity.width);
    });
    this._context.stroke();
  }

  private _init(target: HTMLElement) {
    const bounds = target.getBoundingClientRect();
    this._canvas = document.createElement('canvas');
    this._context = this._canvas.getContext('2d');
    this._canvas.width = bounds.width;
    this._canvas.height = bounds.height;
    target.innerHTML = '';
    target.append(this._canvas);
  }
}
