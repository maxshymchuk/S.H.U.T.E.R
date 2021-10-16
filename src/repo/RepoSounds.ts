import { IRepo, ISound } from './interfaces';
import { ISoundConfig } from '../engine/interfaces/configs';

export default class RepoSounds implements IRepo {
  private _sounds: ISound[];
  private _soundsConfig: ISoundConfig[];

  constructor() {
  }

  public get sounds(): ISound[] {
    return this._sounds;
  }

  public set config(config: ISoundConfig[]) {
    this._soundsConfig = config;
  }

  public init(): Promise<void> {
    return new Promise((resolve, reject) => setTimeout(() => {
      console.log('sounds loaded');
      resolve();
    }, 3000));
  }
}
