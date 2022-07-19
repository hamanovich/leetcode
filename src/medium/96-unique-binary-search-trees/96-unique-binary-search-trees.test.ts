import { numTrees } from './96-unique-binary-search-trees';
import { numTrees as numTrees2 } from './96-unique-binary-search-trees-2';

describe('numTrees', () => {
  test('Input: n = 3; Output: 5', () => {
    expect(numTrees(3)).toBe(5);
    expect(numTrees2(3)).toBe(5);
  });

  test('Input: n = 1; Output: 1', () => {
    expect(numTrees(1)).toBe(1);
    expect(numTrees2(1)).toBe(1);
  });
});
