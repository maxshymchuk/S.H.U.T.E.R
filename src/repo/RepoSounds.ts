import { ISoundConfig } from '../engine/interfaces/configs';
import { ISound } from '../engine/interfaces/features';
import { IRepo } from './interfaces';

export default class RepoSounds implements IRepo<ISoundConfig[]> {
  private _sounds: ISound[];
  private _soundsConfig: ISoundConfig[];

  public get sounds(): ISound[] {
    return this._sounds;
  }

  public set config(config: ISoundConfig[]) {
    this._soundsConfig = config;
  }

  public load(): Promise<void> {
    return new Promise((resolve, reject) => setTimeout(() => {
      console.log('sounds loaded');
      resolve();
    }, 1000));
  }
}
