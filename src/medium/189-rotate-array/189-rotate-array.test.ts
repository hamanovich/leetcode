import { rotate } from './189-rotate-array';

describe('rotate', () => {
  test('Input: nums = [1,2,3,4,5,6,7], k = 3; Output: [5,6,7,1,2,3,4]', () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    const output = [5, 6, 7, 1, 2, 3, 4];
    rotate(input, 3);
    expect(input).toEqual(output);
  });

  test('Input: nums = [-1,-100,3,99], k = 2; Output: [3,99,-1,-100]', () => {
    const input = [-1, -100, 3, 99];
    const output = [3, 99, -1, -100];
    rotate(input, 2);
    expect(input).toEqual(output);
  });
});
