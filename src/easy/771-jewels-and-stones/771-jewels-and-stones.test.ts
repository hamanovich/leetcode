import { numJewelsInStones } from './771-jewels-and-stones';

describe('numJewelsInStones', () => {
  test('Input: jewels = "aA", stones = "aAAbbbb"; Output: 3', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3);
  });

  test('Input: jewels = "z", stones = "ZZ"; Output: 0', () => {
    expect(numJewelsInStones('z', 'ZZ')).toBe(0);
  });
});
