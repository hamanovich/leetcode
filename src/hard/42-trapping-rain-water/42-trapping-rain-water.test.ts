import { trap } from './42-trapping-rain-water';
import { trap as trapStack } from './42-trapping-rain-water-2';
import { trap as trapTwoPointers } from './42-trapping-rain-water-3';

describe('trap', () => {
  test('Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]; Output: 6', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    expect(trapStack([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    expect(trapTwoPointers([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });

  test('Input: height = [4,2,0,3,2,5]; Output: 9', () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
    expect(trapStack([4, 2, 0, 3, 2, 5])).toBe(9);
    expect(trapTwoPointers([4, 2, 0, 3, 2, 5])).toBe(9);
  });
});
