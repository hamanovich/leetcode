import { uniquePaths } from './62-unique-paths';
import { uniquePaths as uniquePaths2 } from './62-unique-paths-2';

describe('uniquePaths', () => {
  test('Input: m = 3, n = 7; Output: 28', () => {
    expect(uniquePaths(3, 7)).toBe(28);
    expect(uniquePaths2(3, 7)).toBe(28);
  });

  test('Input: m = 3, n = 2; Output: 3', () => {
    expect(uniquePaths(3, 2)).toBe(3);
    expect(uniquePaths2(3, 2)).toBe(3);
  });
});
