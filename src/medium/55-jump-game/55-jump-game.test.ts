import { canJump } from './55-jump-game';

describe('canJump', () => {
  test('Input: nums = [2,3,1,1,4]; Output: true', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBeTruthy();
  });

  test('Input: nums = [3,2,1,0,4]; Output: false', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBeFalsy();
  });
});
