export class Array<T> {
  length: number;
  data: { [key: number]: unknown };

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index: number) {
    return this.data[index];
  }

  push(element: T) {
    this.data[this.length] = element;
    this.length++;

    return this.length;
  }

  pop() {
    const item = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;

    return item;
  }

  delete(index = this.length) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return this.data;
  }

  clear() {
    for (let prop in this.data) {
      if (this.data.hasOwnProperty(prop)) {
        delete this.data[prop];
      }
    }

    this.length = 0;
  }

  insert(item: T, index: number) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[index] = item;
    this.length++;

    return this.data;
  }
}
