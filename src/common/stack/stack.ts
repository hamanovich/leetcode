export class Stack<T> {
  #items: T[] = [];

  push(element: T): void {
    this.#items.push(element);
  }

  pop(): void {
    this.#items.length && this.#items.pop();
  }

  isEmpty(): boolean {
    return this.#items.length === 0;
  }

  empty(): void {
    this.#items.length = 0;
  }

  size(): number {
    return this.#items.length;
  }

  peek(): T {
    return this.#items[this.#items.length - 1];
  }

  toString(): string {
    return this.#items.join('');
  }
}
