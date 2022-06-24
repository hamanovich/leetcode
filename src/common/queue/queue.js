export class Queue {
  #items = [];

  enqueue(item) {
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

  toString() {
    return this.#items.join('');
  }
}
