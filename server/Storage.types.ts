export interface IStorage<T> {
  init(entityName: string, storagePath: string): Promise<void>;

  create(entity: T): Promise<T>;

  getAll(): Promise<T[]>;

  get(id: number): Promise<T | undefined>;

  update(entity: T): Promise<T>;

  delete(entity: T): Promise<void>;

  exists(id: number): Promise<boolean>;
}
