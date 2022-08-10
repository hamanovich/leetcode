// https://leetcode.com/problems/implement-queue-using-stacks/

export class MyQueue {
  first: number[] = [];
  second: number[] = [];

  constructor() {
    this.first = [];
    this.second = [];
  }

  push(x: number): void {
    this.first.push(x);
  }

  pop(): number {
    while (this.first.length) this.second.push(this.first.pop() as number);

    const pop = this.second.pop() as number;

    while (this.second.length) this.first.push(this.second.pop() as number);

    return pop;
  }

  peek(): number {
    while (this.first.length) this.second.push(this.first.pop() as number);

    const pop = this.second.pop() as number;
    this.second.push(pop);

    while (this.second.length) this.first.push(this.second.pop() as number);

    return pop;
  }

  empty(): boolean {
    return this.first.length === 0 ? true : false;
  }
}
