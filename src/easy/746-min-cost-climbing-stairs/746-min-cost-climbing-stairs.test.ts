import { minCostClimbingStairs } from './746-min-cost-climbing-stairs';

describe('minCostClimbingStairs', () => {
  test('Input: cost = [1]; Output: 0', () => {
    expect(minCostClimbingStairs([1])).toBe(0);
  });

  test('Input: cost = [1,2]; Output: 1', () => {
    expect(minCostClimbingStairs([1, 2])).toBe(1);
  });

  test('Input: cost = [10,15,20]; Output: 15', () => {
    expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
  });

  test('Input: cost = [1,100,1,1,1,100,1,1,100,1]; Output: 6', () => {
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
  });
});
