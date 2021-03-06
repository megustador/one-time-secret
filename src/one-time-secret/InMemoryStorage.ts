import { StorageInterface } from './StorageInterface';

export type SecretType = { secret: string | undefined };

export class InMemoryStorage implements StorageInterface {
  /**
   * Intentionally not injecting the Map
   * This should not be tamperable
   *
   * To prevent the secret from being allocated in multiple places in
   * memory it is provided without use of a variable or reference.
   * Promise resolve will make it act as a function reference.
   * If Node itself assigns it somewhere, I don't know how I can help
   * that.
   *
   * Use of object for a value in get/set to encourage only a reference to the
   * value is used everywhere, also this lets me mutate the original memory
   * location.
   */

  private map: Map<string, string>;

  constructor() {
    this.map = new Map();
  }

  // Resolve the value and delete the key
  async get(key: string): Promise<SecretType> {
    // tslint:disable-next-line
    return <Promise<SecretType>> new Promise((resolve) => {
      const result: SecretType = { secret: this.map.get(key) };
      resolve(result);
      this.map.delete(key);
    });
  }

  async has(key: string): Promise<boolean> {
    return <any> new Promise((resolve) => {
      resolve(this.map.has(key));
    });
  }

  // Set the value and delete the key after the TTL
  set(key: string, value: SecretType, ttl: number): void {
    this.map.set(key, <string> value.secret);

    setTimeout(() => {
      this.map.delete(key);
    }, ttl);
  }
}
