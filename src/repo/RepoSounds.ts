import { ISoundConfig } from '../engine/interfaces/configs';
import { ISound } from '../engine/interfaces/features';
import BaseRepo from './BaseRepo';

export default class RepoSounds extends BaseRepo<ISoundConfig, ISound> {
  protected _load(config: ISoundConfig) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('sounds loaded');
        resolve();
      }, 3000);
    })
  }
}
