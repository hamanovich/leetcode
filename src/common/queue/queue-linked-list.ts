import { LinkedList } from '../linked-list/linked-list';

export class Queue {
  #list = new LinkedList();

  enqueue(item: number) {
    this.#list.append(item);
  }

  dequeue() {
    const removedHead = this.#list.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  isEmpty() {
    return !this.#list.head;
  }

  empty() {
    this.#list.clear();
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.#list.head?.value;
  }

  toArray() {
    return this.#list.toArray().map(node => node.value);
  }

  toString(callback?: <T>(arg?: T) => T) {
    return this.#list.toString(callback);
  }
}
