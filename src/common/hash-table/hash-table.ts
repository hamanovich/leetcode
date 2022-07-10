export class HashTable<T> {
  table;
  size;

  constructor(bucketsNumber = 100) {
    this.table = new Array(bucketsNumber);
    this.size = 0;
  }

  #hash(key: string): number {
    let hash = 0;

    for (let i = 0; i < key.length; i++) hash += key.charCodeAt(i);

    return hash % this.table.length;
  }

  set(key: string, value: T): void {
    const index = this.#hash(key);

    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }

    this.size++;
  }

  get(key: string): T | undefined {
    const index = this.#hash(key);

    if (this.table[index]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i] && this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }

    return undefined;
  }

  clear(): void {
    Object.getOwnPropertyNames(this.table).forEach(property => delete this.table[Number(property)]);
    this.size = 0;
  }

  remove(key: string): boolean {
    const index = this.#hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    }

    return false;
  }
}
