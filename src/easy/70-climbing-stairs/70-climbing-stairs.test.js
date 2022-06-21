import { climbStairs } from './70-climbing-stairs';
import { climbStairs as climbStairs2 } from './70-climbing-stairs-2';

describe('climbStairs', () => {
  test('n = 2', () => {
    expect(climbStairs(2)).toBe(2);
    expect(climbStairs2(2)).toBe(2);
  });

  test('n = 3', () => {
    expect(climbStairs(3)).toBe(3);
    expect(climbStairs2(3)).toBe(3);
  });

  test('n = 4', () => {
    expect(climbStairs(4)).toBe(5);
    expect(climbStairs2(4)).toBe(5);
  });

  test('n = 5', () => {
    expect(climbStairs(5)).toBe(8);
    expect(climbStairs2(5)).toBe(8);
  });
});
