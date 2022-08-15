import { maxProfit } from './122-best-time-to-buy-and-sell-stock-ii';

describe('maxProfit', () => {
  test('Input: prices = [7,1,5,3,6,4]; Output: 7', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
  });

  test('Input: prices = [1,2,3,4,5]; Output: 4', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  test('Input: prices = [7,6,4,3,1]; Output: 0', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});
