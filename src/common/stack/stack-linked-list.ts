import { LinkedList } from '../linked-list/linked-list';

export class Stack<T = unknown> {
  #list = new LinkedList();

  push(element: T): void {
    this.#list.prepend(element);
  }

  pop(): unknown {
    const removedHead = this.#list.deleteHead();

    return removedHead ? removedHead.value : null;
  }

  isEmpty(): boolean {
    return !this.#list.head;
  }

  empty(): void {
    this.#list.clear();
  }

  peek(): unknown {
    if (this.isEmpty()) return null;

    return this.#list.head?.value;
  }

  toArray(): unknown[] | undefined {
    return this.#list.toArray()?.map(node => node.value);
  }

  toString(callback?: <T>(arg: T) => string): string | undefined {
    return this.#list.toString(callback);
  }
}
