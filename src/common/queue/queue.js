export class Queue {
  #items = [];

  enqueue(item) {
    this.#items.splice(0, 0, item);
  }

  dequeue() {
    if (!this.#items.length) throw new RangeError('Underflow');
    this.#items.pop();
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
}
