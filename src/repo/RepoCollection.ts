import RepoAssets from './RepoAssets';
import { IAssetConfig, ISoundConfig } from '../engine/interfaces/configs';
import RepoSounds from './RepoSounds';
import { IRepoAsset, IRepoCollection, IWithAssets, IWithSounds } from './interfaces';
import { ISound } from '../engine/interfaces/features';
import { ASSET_TYPES, SOUND_TYPES } from '../constants';

export class RepoCollection implements IRepoCollection, IWithAssets, IWithSounds {
  private _assetsRepo: RepoAssets;
  private _soundsRepo: RepoSounds;

  constructor() {
    this._assetsRepo = new RepoAssets();
    this._soundsRepo = new RepoSounds();
  }

  public getAssets(type: ASSET_TYPES): IRepoAsset[] {
    return this._assetsRepo.assets.filter(asset => asset.type === type);
  }

  public setAssets(config: IAssetConfig[]): void {
    this._assetsRepo.config = config;
  }


  public getSounds(type: SOUND_TYPES): ISound[] {
    return this._soundsRepo.sounds.filter(sound => sound.type === type);
  }

  public setSounds(config: ISoundConfig[]): void {
    this._soundsRepo.config = config;
  }

  public init(): Promise<void> {
    return new Promise((resolve, reject) => {
      Promise.all([
        this._assetsRepo.load(),
        this._soundsRepo.load(),
      ]).then(() => resolve()).catch(() => reject());
    });
  }
}

const repo = new RepoCollection();

export default repo;