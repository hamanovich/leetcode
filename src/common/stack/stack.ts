export class Stack<T> {
  #items: T[] = [];

  push(element: T) {
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

  toString() {
    return this.#items.join('');
  }
}
