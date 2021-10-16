import { IAsset, IRepo, ISound, IWithAssets, IWithSounds } from './interfaces';
import RepoAssets from './RepoAssets';
import { IAssetConfig, ISoundConfig } from '../engine/interfaces/configs';
import RepoSounds from './RepoSounds';

export class Repo implements IRepo, IWithAssets, IWithSounds {
  private _assetsRepo: RepoAssets;
  private _soundsRepo: RepoSounds;

  constructor() {
    this._assetsRepo = new RepoAssets();
    this._soundsRepo = new RepoSounds();
  }

  public get assets(): IAsset[] {
    return this._assetsRepo.assets;
  }

  public setAssets(config: IAssetConfig[]): void {
    this._assetsRepo.config = config;
  }

  public get sounds(): ISound[] {
    return this._soundsRepo.sounds;
  }

  public setSounds(config: ISoundConfig[]): void {
    this._soundsRepo.config = config;
  }

  public init(): Promise<void> {
    return new Promise((resolve, reject) => {
      Promise.all([
        this._assetsRepo.init(),
        this._soundsRepo.init(),
      ]).then(() => resolve()).catch(() => reject());
    });
  }
}

const repo = new Repo();

export default repo;