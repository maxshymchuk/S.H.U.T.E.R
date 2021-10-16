import { IAsset, IRepo } from './interfaces';
import { IAssetConfig } from '../engine/interfaces/configs';

export default class RepoAssets implements IRepo {
  private _assets: IAsset[];
  private _assetsConfig: IAssetConfig[];

  constructor() {
  }

  public get assets(): IAsset[] {
    return this._assets;
  }

  public set config(config: IAssetConfig[]) {
    this._assetsConfig = config;
  }

  public init(): Promise<void> {
    return new Promise((resolve, reject) => setTimeout(() => {
      console.log('assets loaded');
      resolve();
    }, 1000));
  }
}
