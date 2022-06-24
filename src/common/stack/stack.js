export class Stack {
  #items = [];

  push(element) {
    this.#items.push(element);
  }

  pop() {
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
    return this.#items[this.#items.length - 1];
  }

  min() {
    return Math.min(...this.#items);
  }

  toString() {
    return this.#items.join('');
  }
}
