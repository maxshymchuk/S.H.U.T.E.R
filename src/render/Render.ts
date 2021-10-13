import { IRender, IRenderParams } from './interfaces';
import { IEngine } from '../engine/interfaces/engine';

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

  public draw(game: IEngine) {
    this.clear();
    game.entities.forEach(entity => {
      this._context.fillStyle = entity.color;
      this._context.fillRect(entity.x, entity.y, entity.width, entity.height);
    });
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
