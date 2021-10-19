export default abstract class BaseRepo<C, D> {
  protected _data: D[] = [];
  private _config: C[] = [];

  public get data(): D[] {
    return this._data;
  }

  public set config(config: C[]) {
    this._config = config;
  }

  public get config(): C[] {
    return this._config;
  }

  protected abstract _load(config: C): Promise<void>;

  public load(): Promise<void> {
    return new Promise((resolve, reject) => {
      Promise.all(this._config.map(item => this._load(item))).then(() => resolve()).catch(() => reject());
    });
  }
}
