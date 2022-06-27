import { Stack } from './stack';

describe('stack', () => {
  const stack = new Stack();

  beforeEach(() => stack.empty());

  test('push', () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
    expect(stack.isEmpty()).toBeFalsy();
  });

  test('pop', () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
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

  test('size', () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
    stack.pop();
    expect(stack.size()).toBe(0);
  });

  test('peek', () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });
});
