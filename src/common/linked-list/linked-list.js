import { LinkedListNode } from './linked-list-node';

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const node = new LinkedListNode(value, this.head);
    this.head = node;

    !this.tail && (this.tail = node);

    return this;
  }

  append(value) {
    const node = new LinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;

      return this;
    }

    this.tail.next = node;
    this.tail = node;

    return this;
  }

  find(value) {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (value !== undefined && currentNode.value === value) return currentNode;

      currentNode = currentNode.next;
    }

    return null;
  }

  length() {
    let length = 1;

    while (this.head) {
      length++;
      this.head = this.head.next;
    }

    return length;
  }

  fromArray(values) {
    values.forEach(value => this.append(value));

    return this;
  }

  delete(value) {
    if (!this.head) return null;

    let deletedNode = null;

    while (this.head?.value === value) {
      deletedNode = this.head;

      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail?.value === value) this.tail = currentNode;

    return deletedNode;
  }

  deleteTail() {
    if (!this.tail) return null;

    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.clear();

      return deletedTail;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  deleteHead() {
    if (!this.head) return null;

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.clear();
    }

    return deletedHead;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString(callback) {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString();
  }
}
