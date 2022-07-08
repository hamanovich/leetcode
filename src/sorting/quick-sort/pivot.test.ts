import { pivot } from './pivot';

describe('pivot', () => {
  test('arr = [4,6,1,7,3,2,5]; Output = 3', () => {
    expect(pivot([4, 6, 1, 7, 3, 2, 5])).toBe(3);
  });
});
