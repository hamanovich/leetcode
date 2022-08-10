import { MyQueue } from './232-implement-queue-using-stacks';

describe('MyQueue', () => {
  test('Input ["MyQueue", "push", "push", "peek", "pop", "empty"] [[], [1], [2], [], [], []]; Output [null, null, null, 1, 1, false]', () => {
    const obj = new MyQueue();

    obj.push(1);
    obj.push(2);
    expect(obj.empty()).toBeFalsy();
    expect(obj.peek()).toBe(1);
    expect(obj.pop()).toBe(1);
    expect(obj.pop()).toBe(2);
    expect(obj.empty()).toBeTruthy();
  });
});
