import { IAssetConfig, ISoundConfig } from '../engine/interfaces/configs';

export enum RepoStatuses {
  LOADED = 'loaded',
  ERROR = 'error',
  LOADING = 'loading',
}

export interface IRepo {
  init: () => Promise<void>;
}

export interface IWithAssets {
  readonly assets: IAsset[];
  setAssets: (config: IAssetConfig[]) => void;
}

export interface IWithSounds {
  readonly sounds: ISound[];
  setSounds: (config: ISoundConfig[]) => void;
}

export interface ILoader<T> {
  load: (config: T) => Promise<void>;
}

export interface IAsset {
  sprites: HTMLImageElement;
  spriteWidth: number;
  spriteHeight: number;
  width: number;
  height: number;
}

export interface ISound {
}
