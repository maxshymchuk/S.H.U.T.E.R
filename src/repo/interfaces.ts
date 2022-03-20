import { IAssetConfig, ISoundConfig } from '../engine/interfaces/configs';
import { IFrame, ISound } from '../engine/interfaces/features';
import { ASSET_TYPES, SOUND_TYPES } from '../constants';

export enum RepoStatuses {
  LOADED = 'loaded',
  ERROR = 'error',
  LOADING = 'loading',
}

export interface IRepoCollection {
  init: () => Promise<void>;
}

export interface IWithAssets {
  getAssets: (type: ASSET_TYPES) => IRepoAsset[];
  setAssets: (config: IAssetConfig[]) => void;
}

export interface IWithSounds {
  getSounds: (type: SOUND_TYPES) => ISound[];
  setSounds: (config: ISoundConfig[]) => void;
}

export interface IRepoAsset {
  type: ASSET_TYPES;
  frames: IFrame[];
}