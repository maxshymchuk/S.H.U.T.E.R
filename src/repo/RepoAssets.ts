import { IRepoAsset } from './interfaces';
import { IAssetConfig } from '../engine/interfaces/configs';
import BaseRepo from './BaseRepo';

export default class RepoAssets extends BaseRepo<IAssetConfig, IRepoAsset> {
  protected _load(config: IAssetConfig) {
    return new Promise<void>((resolve) => {
      const image = new Image();
      image.src = config.src;
      const poll = setInterval(() => {
        if (image.naturalWidth && image.naturalHeight) {
          clearInterval(poll);
          console.log('assets loaded');
          this._data.push({
            type: config.type,
            frames: config.frames.map(frame => ({ 
              ...frame, 
              assetType: config.type,
              entityType: frame.type,
              sprites: image
            }))
          });
          resolve();
        }
      }, 10);
    });
  }
}
