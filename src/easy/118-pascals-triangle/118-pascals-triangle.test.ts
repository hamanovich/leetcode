import { generate } from './118-pascals-triangle';

describe('generate', () => {
  test('Input: numRows = 5; Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]', () => {
    expect(generate(5)).toStrictEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });

  test('Input: numRows = 1; Output: [[1]]', () => {
    expect(generate(1)).toStrictEqual([[1]]);
  });

  test('Input: numRows = 2; Output: [[1],[1,1]]', () => {
    expect(generate(2)).toStrictEqual([[1], [1, 1]]);
  });
});
