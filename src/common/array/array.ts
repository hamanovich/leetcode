export class Array<T> {
  length: number;
  data: { [key: number]: T };

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index: number): T {
    return this.data[index];
  }

  push(element: T): number {
    this.data[this.length] = element;
    this.length++;

    return this.length;
  }

  pop(): T {
    const item: T = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;

    return item;
  }

  delete(index = this.length): { [key: number]: T } | undefined {
    if (!this.length) return;

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return this.data;
  }

  clear(): void {
    Object.getOwnPropertyNames(this.data).forEach(property => delete this.data[Number(property)]);
    this.length = 0;
  }

  insert(item: T, index: number): { [key: number]: T } {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[index] = item;
    this.length++;

    return this.data;
  }
}
