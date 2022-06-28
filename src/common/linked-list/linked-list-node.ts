export class LinkedListNode {
  constructor(public value = 0, public next: LinkedListNode | null = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback?: <T>(arg?: T) => T) {
    return callback ? callback(this.value) : this.value;
  }
}
