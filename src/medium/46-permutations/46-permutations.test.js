import { permute } from './46-permutations';
import { permute as permuteDFS } from './46-permutations-2';

describe('permute', () => {
  test('nums = [1,2,3]', () => {
    expect(permute([1, 2, 3])).toStrictEqual([
      [1, 2, 3],
      [2, 1, 3],
      [2, 3, 1],
      [1, 3, 2],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  test('nums = [1,2,3]', () => {
    expect(permuteDFS([1, 2, 3])).toStrictEqual(
      [
        [1, 2, 3],
        [2, 1, 3],
        [1, 3, 2],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ].sort()
    );
  });

  test('nums = [0,1]', () => {
    expect(permute([0, 1])).toStrictEqual([
      [0, 1],
      [1, 0],
    ]);
    expect(permuteDFS([0, 1])).toStrictEqual([
      [0, 1],
      [1, 0],
    ]);
  });

  test('nums = [1]', () => {
    expect(permute([1])).toStrictEqual([[1]]);
  });
  test('nums = [1]', () => {
    expect(permuteDFS([1])).toStrictEqual([[1]]);
  });
});
