export class Stack {
  #items = [];

  push(element) {
    this.#items.push(element);
  }

  pop() {
    if (!this.#items.length) throw new RangeError('Underflow');
    return this.#items.pop();
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
}
