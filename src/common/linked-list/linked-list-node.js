export class LinkedListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : this.value;
  }
}
