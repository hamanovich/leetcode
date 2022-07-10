import { LinkedListNode } from './linked-list-node';

export class LinkedList<T = unknown> {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value: T): LinkedList<T> {
    const node = new LinkedListNode<T>(value, this.head);

    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    return this;
  }

  append(value: T): LinkedList<T> {
    const node = new LinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    return this;
  }

  find(value: T): LinkedListNode | null {
    let currentNode = this.head as LinkedListNode;

    while (currentNode) {
      if (value !== undefined && currentNode.value === value) return currentNode;

      currentNode = currentNode.next as LinkedListNode;
    }

    return null;
  }

  fromArray(values: T[]): LinkedList<T> {
    values.forEach(value => this.append(value));

    return this;
  }

  delete(value: T): LinkedListNode | null {
    if (!this.head) return null;

    let deletedNode = null;

    while (this.head?.value === value) {
      deletedNode = this.head;

      this.head = this.head.next as LinkedListNode<T>;
    }

    let currentNode = this.head as LinkedListNode;

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

    if (this.tail?.value === value) this.tail = currentNode as LinkedListNode<T>;

    return deletedNode;
  }

  deleteTail(): LinkedListNode | null {
    if (!this.tail) return null;

    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.clear();

      return deletedTail;
    }

    let currentNode = this.head;

    while (currentNode?.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next as LinkedListNode<T>;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  deleteHead(): LinkedListNode | null {
    if (!this.head) return null;

    const deletedHead = this.head as LinkedListNode;

    if (this.head.next) {
      this.head = this.head.next as LinkedListNode<T>;
    } else {
      this.clear();
    }

    return deletedHead;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  toArray(): LinkedListNode[] | null {
    const nodes: LinkedListNode[] = [];

    if (!this.head) return null;

    let currentNode = this.head as LinkedListNode;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next as LinkedListNode;
    }

    return nodes;
  }

  toString(callback?: (arg: T) => string): string | undefined {
    if (!this.toArray()) return '';
    return this.toArray()
      ?.map(node => node.toString(callback as ((arg: unknown) => string) | undefined))
      .toString();
  }
}
