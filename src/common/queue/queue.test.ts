import { Queue } from './queue';

describe('queue', () => {
  const queue = new Queue();

  beforeEach(() => queue.empty());

  test('enqueue', () => {
    queue.enqueue(1);
    expect(queue.size()).toBe(1);
    expect(queue.isEmpty()).toBeFalsy();
  });

  test('dequeue', () => {
    queue.enqueue(1);
    expect(queue.size()).toBe(1);
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
  });

  test('isEmpty', () => {
    expect(queue.isEmpty()).toBeTruthy();
  });

  test('empty', () => {
    queue.enqueue(1);
    expect(queue.isEmpty()).toBeFalsy();
    queue.empty();
    expect(queue.isEmpty()).toBeTruthy();
  });

  test('size', () => {
    queue.enqueue(1);
    expect(queue.size()).toBe(1);
  });
});
