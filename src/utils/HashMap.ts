export class HashMap<T, U> {
  private readonly items: Array<[T, U]>;

  constructor() {
    this.items = [];
  }

  size(): number {
    return this.items.length;
  }

  add(key: T, value: U): void {
    this.items.push([key, value]);
  }

  get(key: T): U | undefined {
    for (const item of this.items) {
      if (item[0] === key) {
        return item[1];
      }
    }
    return undefined;
  }

  map<V>(callback: (value: U, index: number, array: U[]) => V): V[] {
    return this.items.map((item) => callback(item[1], 0, []));
  }

  /**
   * Get all values in the map
   * @param param The function to call for each value
   */
  forEach(param: (value: any) => void) {
    this.items.forEach((item) => param(item[1]));
  }

  /**
   * Gets both the key and value of the map
   *
   * @param param The function to call for each key and value
   * @returns An array of the key and value
   */
  forEachEntry(param: (key: T, value: U) => void) {
    this.items.forEach((item) => param(item[0], item[1]));
  }

  static of(id: string, value: any): HashMap<string, any> {
    const map = new HashMap<string, any>();
    map.add(id, value);
    return map;
  }
}
