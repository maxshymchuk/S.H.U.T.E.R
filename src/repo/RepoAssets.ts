import { IRepo } from './interfaces';
import { IAssetConfig } from '../engine/interfaces/configs';
import { IAsset } from '../engine/interfaces/features';

export default class RepoAssets implements IRepo<IAssetConfig[]> {
  private _assets: IAsset[] = [];
  private _assetsConfig: IAssetConfig[];

  public get assets(): IAsset[] {
    return this._assets;
  }

  public set config(config: IAssetConfig[]) {
    this._assetsConfig = config;
  }

  private _loadAssets(config: IAssetConfig) {
    return new Promise<void>((resolve) => {
      const image = new Image();
      image.src = config.src;
      const poll = setInterval(() => {
        if (image.naturalWidth && image.naturalHeight) {
          clearInterval(poll);
          this._assets.push({
            sprites: image,
            spriteWidth: config.spriteWidth,
            spriteHeight: config.spriteHeight,
            x: config.x,
            y: config.y,
            width: config.width,
            height: config.height,
          });
          resolve();
        }
      }, 10);
    })
  }

  public load(): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log('assets loaded');
      Promise.all(
        this._assetsConfig.map(item => this._loadAssets(item))
      ).then(() => resolve()).catch(() => reject());
    });
  }
}
