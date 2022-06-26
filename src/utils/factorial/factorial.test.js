import { factorial } from './factorial';
import { factorial as factorialRecursive } from './factorial-2';

describe('factorial', () => {
  test('n = 3', () => {
    expect(factorial(3)).toBe(6);
    expect(factorialRecursive(3)).toBe(6);
  });

  test('n = 4', () => {
    expect(factorial(4)).toBe(24);
    expect(factorialRecursive(4)).toBe(24);
  });

  test('n = 5', () => {
    expect(factorial(5)).toBe(120);
    expect(factorialRecursive(5)).toBe(120);
  });
});
