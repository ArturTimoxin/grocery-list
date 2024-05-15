import { Storage } from './Storage';
import { IStorage } from './Storage.types';

/**
 * A factory that creates a singleton {@link Storage} object.
 */
export class StorageFactory {
  private static storage: IStorage<any>;

  static getStorage<T>(): IStorage<T> {
    if (this.storage == null) {
      this.storage = new Storage();
    }
    return this.storage;
  }
}
