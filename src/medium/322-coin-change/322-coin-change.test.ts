import { coinChange } from './322-coin-change';
import { coinChange as coinChange2 } from './322-coin-change-2';

describe('coinChange', () => {
  test('Input: coins = [1,2], amount = 2; Output: 1', () => {
    expect(coinChange([1, 2], 2)).toBe(1);
    expect(coinChange2([1, 2], 2)).toBe(1);
  });

  test('Input: coins = [1,2], amount = 1; Output: 1', () => {
    expect(coinChange([1, 2], 1)).toBe(1);
    expect(coinChange2([1, 2], 1)).toBe(1);
  });

  test('Input: coins = [1,2,5], amount = 11; Output: 3', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
    expect(coinChange2([1, 2, 5], 11)).toBe(3);
  });

  test('Input: coins = [2], amount = 3; Output: -1', () => {
    expect(coinChange([2], 3)).toBe(-1);
    expect(coinChange2([2], 3)).toBe(-1);
  });

  test('Input: coins = [1], amount = 0; Output: 0', () => {
    expect(coinChange([1], 0)).toBe(0);
    expect(coinChange2([1], 0)).toBe(0);
  });

  test('Input: coins = [2,5,10,1], amount = 27; Output: 4', () => {
    expect(coinChange([2, 5, 10, 1], 27)).toBe(4);
    expect(coinChange2([2, 5, 10, 1], 27)).toBe(4);
  });

  test('Input: coins = [186,419,83,408], amount = 6249; Output: 20', () => {
    expect(coinChange([186, 419, 83, 408], 6249)).toBe(20);
    expect(coinChange2([186, 419, 83, 408], 6249)).toBe(20);
  });
});
