import { Stack } from './stack-linked-list';

describe('stack', () => {
  const stack = new Stack();

  beforeEach(() => stack.empty());

  test('push', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.toString()).toBe('2,1');
    expect(stack.isEmpty()).toBeFalsy();
  });

  test('pop', () => {
    stack.push(1);
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });

  test('isEmpty', () => {
    expect(stack.isEmpty()).toBeTruthy();
    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();
  });

  test('empty', () => {
    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();
    stack.empty();
    expect(stack.isEmpty).toBeTruthy();
  });

  test('peek', () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  it('should be possible to convert stack to array', () => {
    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toArray()).toEqual([3, 2, 1]);
  });
});
