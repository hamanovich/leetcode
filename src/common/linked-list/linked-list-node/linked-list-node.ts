export class LinkedListNode<T = unknown> {
  constructor(public value: T, public next: LinkedListNode<T> | null = null) {
    this.value = value;
  }

  toString(callback?: (arg: T) => string): string {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
