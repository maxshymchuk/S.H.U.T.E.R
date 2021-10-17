import { IAssetConfig, ISoundConfig } from '../engine/interfaces/configs';
import { IAsset, ISound } from '../engine/interfaces/features';

export enum RepoStatuses {
  LOADED = 'loaded',
  ERROR = 'error',
  LOADING = 'loading',
}

export interface IRepoCollection {
  init: () => Promise<void>;
}

export interface IRepo<T> {
  config: T;
  load: () => Promise<void>;
}

export interface IWithAssets {
  readonly assets: IAsset[];
  setAssets: (config: IAssetConfig[]) => void;
}

export interface IWithSounds {
  readonly sounds: ISound[];
  setSounds: (config: ISoundConfig[]) => void;
}
