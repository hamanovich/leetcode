export class Queue<T> {
  #items: T[] = [];

  enqueue(item: T) {
    this.#items.splice(0, 0, item);
  }

  dequeue() {
    this.#items.length && this.#items.pop();
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  empty() {
    this.#items.length = 0;
  }

  size() {
    return this.#items.length;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.#items[0];
  }

  toString() {
    return this.#items.join('');
  }
}
