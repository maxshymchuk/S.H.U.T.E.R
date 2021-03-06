import { IEngine, IEngineParams } from './interfaces/engine';
import { ENGINE_TICKRATE, ENTITY_TYPES } from '../constants';
import { Entity } from './entities/Entity';
import { IRender } from '../render/interfaces';
import Render from '../render/Render';
import { Dispatch } from 'react';
import cloneDeep from 'lodash.clonedeep';

export class Engine implements IEngine {
  private _initialEntities: Entity[] = [];
  private _timer: NodeJS.Timer = null;
  private readonly _tickrate: number;
  private readonly _render: IRender = null;

  constructor(params?: IEngineParams) {
    this._tickrate = params?.tickrate || ENGINE_TICKRATE;
    this._render = params?.render || new Render();
  }

  public get render(): IRender {
    return this._render;
  }

  private _tickCount: number = 0;

  public get tickCount(): number {
    return this._tickCount;
  }

  private _entities: Entity[] = [];

  public get entities(): Entity[] {
    return this._entities;
  }

  public set entities(entities: Entity[]) {
    this._entities = entities;
    this._initialEntities = cloneDeep(entities);
  }

  private _dispatch: Dispatch<any>;

  public set dispatch(dispatch: Dispatch<any>) {
    this._dispatch = dispatch;
  }

  public getPlayer() {
    return this._entities.filter(entity => entity.entityType === ENTITY_TYPES.PLAYER)[0];
  }

  public getMates() {
    return this._entities.filter(entity => entity.entityType === ENTITY_TYPES.MATE);
  }

  public start(): void {
    console.log('Game start (continue)');
    if (this._timer) return;
    const tick = this._tick.bind(this);
    this._timer = setInterval(tick, this._tickrate);
  }

  public stop(): void {
    console.log('Game stop (pause)');
    clearInterval(this._timer);
    this._timer = null;
  }

  public reset(): void {
    console.log('Game reset');
    this.render.clear();
    this.stop();
    this._entities = cloneDeep(this._initialEntities);
    this._tickCount = 0;
  }

  private _tick(): void {
    this._entities?.forEach(entity => entity.tick());
    this._render.drawFrame(this);
    this._tickCount++;
    // if (this._dispatch) {
    //   const gameState = extractGameState(this);
    //   this._dispatch(updateGameState(gameState));
    // }
  }
}

const game = new Engine();

export default game;
