import { IRender, IRenderParams } from './interfaces';
import { IEngine } from '../engine/interfaces/engine';
import { IEntity, IFrame } from '../engine/interfaces/features';
import { getColorByEntity } from '../utils';
import { ASSET_TYPES, ENTITY_TYPES, FRAME_STATES } from '../constants';
import repo from '../repo/RepoCollection';

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
    game.entities.sort((entity) => entity.entityType === ENTITY_TYPES.PLAYER ? 1 : -1).forEach(entity => {
      // this._drawPlaceholder(entity);
      this._drawTexture(entity);
      this._drawHitbox(entity);
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

  private __TEMP__getAnimationFrame(entity: IEntity): IFrame {
    function getFrameState() {
      switch (entity.direction.x) {
        case -1: return FRAME_STATES.SHIFT_LEFT;
        case 1: return FRAME_STATES.SHIFT_RIGHT;
        default: return FRAME_STATES.DEFAULT 
      }
    }
    return entity.frames.find(frame => frame.state === getFrameState())
  }

  private _drawFrame(entity) {
    const frame = this.__TEMP__getAnimationFrame(entity);
    this._context.drawImage(frame.sprites, frame.x, frame.y, frame.width, frame.height, entity.x, entity.y, entity.width, entity.height);
  }

  private _drawTexture(entity: IEntity) {
    if (!entity.frames) return;
    const frame = this.__TEMP__getAnimationFrame(entity);
    if (!frame) return;
    if (entity.entityType === ENTITY_TYPES.ENEMY) {
      this._rotate(entity, 180);
      this._drawFrame(entity);
      this._rotate(entity, -180);
      return;
    }
    this._drawFrame(entity);
  }

  private _drawHitbox(entity: IEntity) {
    this._context.beginPath();
    this._context.strokeStyle = getColorByEntity(entity);
    this._context.lineWidth = 1;
    const frame = this.__TEMP__getAnimationFrame(entity);
    frame.hitbox.forEach(vertice => {
      if (entity.entityType === ENTITY_TYPES.ENEMY) {
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
