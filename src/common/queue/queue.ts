export class Queue<T> {
  #items: T[] = [];

  enqueue(item: T): void {
    this.#items.splice(0, 0, item);
  }

  dequeue(): void {
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

  peek(): T | null {
    if (this.isEmpty()) return null;

    return this.#items[0];
  }

  toString(): string {
    return this.#items.join('');
  }
}
