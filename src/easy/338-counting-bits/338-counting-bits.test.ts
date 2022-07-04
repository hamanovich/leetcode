import { countBits } from './338-counting-bits';

describe('countBits', () => {
  test('n = 0', () => {
    expect(countBits(0)).toStrictEqual([0]);
  });

  test('n = 5', () => {
    expect(countBits(5)).toStrictEqual([0, 1, 1, 2, 1, 2]);
  });

  test('n = 15', () => {
    expect(countBits(15)).toStrictEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4]);
  });
});
