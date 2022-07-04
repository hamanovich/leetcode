import { fib } from './509-fibonacci-number';
import { fib as fib2 } from './509-fibonacci-number-2';

describe('Fibonacci number', () => {
  test('Input: n = 0; Output: 0', () => {
    expect(fib(0)).toBe(0);
    expect(fib2(0)).toBe(0);
  });

  test('Input: n = 1; Output: 1', () => {
    expect(fib(1)).toBe(1);
    expect(fib2(1)).toBe(1);
  });

  test('Input: n = 2; Output: 1', () => {
    expect(fib(2)).toBe(1);
    expect(fib2(2)).toBe(1);
  });

  test('Input: n = 3; Output: 2', () => {
    expect(fib(3)).toBe(2);
    expect(fib2(3)).toBe(2);
  });

  test('Input: n = 4; Output: 3', () => {
    expect(fib(4)).toBe(3);
    expect(fib2(4)).toBe(3);
  });

  test('Input: n = 6; Output: 8', () => {
    expect(fib(6)).toBe(8);
    expect(fib2(6)).toBe(8);
  });

  test('Input: n = 10; Output: 3', () => {
    expect(fib(10)).toBe(55);
    expect(fib2(10)).toBe(55);
  });
});
