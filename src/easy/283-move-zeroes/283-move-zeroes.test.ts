import { moveZeroes } from './283-move-zeroes';

describe('moveZeroes', () => {
  test('Input: nums = [0,1,0,3,12]; Output: [1,3,12,0,0]', () => {
    const before = [0, 1, 0, 3, 12];
    const after = [1, 3, 12, 0, 0];

    moveZeroes(before);

    expect(before).toStrictEqual(after);
  });

  test('Input: nums = [0]; Output: [0]', () => {
    const before = [0];
    const after = [0];

    moveZeroes(before);

    expect(before).toStrictEqual(after);
  });
});
