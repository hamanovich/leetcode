export class BinaryHeap<T = number> {
  heap: T[] = [];
  mapHeap: Map<T, T> = new Map();

  constructor() {
    this.heap = [];
    this.mapHeap = new Map();
  }

  getLeftIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  getRightIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex: number): boolean {
    return this.getParentIndex(childIndex) >= 0;
  }

  hasLeftChild(parentIndex: number): boolean {
    return this.getLeftIndex(parentIndex) < this.heap.length;
  }

  hasRightChild(parentIndex: number): boolean {
    return this.getRightIndex(parentIndex) < this.heap.length;
  }

  leftChild(parentIndex: number): T {
    return this.heap[this.getLeftIndex(parentIndex)];
  }

  rightChild(parentIndex: number): T {
    return this.heap[this.getRightIndex(parentIndex)];
  }

  parent(childIndex: number): T {
    return this.heap[this.getParentIndex(childIndex)];
  }

  swap(indexOne: number, indexTwo: number): void {
    [this.heap[indexOne], this.heap[indexTwo]] = [this.heap[indexTwo], this.heap[indexOne]];
  }

  find(item: T) {
    const indices: number[] = [];

    for (let itemIndex = 0; itemIndex < this.heap.length; itemIndex += 1) {
      if (item === this.heap[itemIndex]) indices.push(itemIndex);
    }

    return indices;
  }

  has(item: T): boolean {
    return !!this.mapHeap.get(item);
  }

  heapifyUp(customStartIndex?: number): void {
    let currentIndex = customStartIndex || this.heap.length - 1;

    while (this.hasParent(currentIndex) && this.parent(currentIndex) > this.heap[currentIndex]) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(customStartIndex = 0): void {
    let currentIndex = customStartIndex;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (this.hasRightChild(currentIndex) && this.rightChild(currentIndex) < this.leftChild(currentIndex))
        nextIndex = this.getRightIndex(currentIndex);
      else nextIndex = this.getLeftIndex(currentIndex);

      if (this.heap[currentIndex] <= this.heap[nextIndex]) break;

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  peek(): T | null {
    return this.heap.length === 0 ? null : this.heap[0];
  }

  poll(): T | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop() as T;

    const item = this.heap[0];
    this.heap[0] = this.heap.pop() as T;
    this.heapifyDown();

    return item;
  }

  add(item: T): BinaryHeap<T> {
    this.heap.push(item);
    this.mapHeap.set(item, item);
    this.heapifyUp();

    return this;
  }

  remove(item: T): BinaryHeap<T> {
    const numberOfItemsToRemove = this.find(item).length;

    this.mapHeap.delete(item);

    for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
      const indexToRemove = this.find(item).pop() as number;

      if (indexToRemove === this.heap.length - 1) this.heap.pop();
      else {
        this.heap[indexToRemove] = this.heap.pop() as T;

        const parentItem = this.parent(indexToRemove);

        if (this.hasLeftChild(indexToRemove) && (!parentItem || parentItem <= this.heap[indexToRemove]))
          this.heapifyDown(indexToRemove);
        else this.heapifyUp(indexToRemove);
      }
    }

    return this;
  }

  isEmpty(): boolean {
    return !this.heap.length;
  }

  toString(): string {
    return this.heap.toString();
  }
}
