export class LinkedListNode<T = unknown> {
  constructor(public value: T, public next: LinkedListNode | null = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback?: (arg: T) => string) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
