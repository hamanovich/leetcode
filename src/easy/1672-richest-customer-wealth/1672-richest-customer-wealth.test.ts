import { maximumWealth } from './1672-richest-customer-wealth';
import { maximumWealth as maximumWealth2 } from './1672-richest-customer-wealth-2';

describe('maximumWealth', () => {
  test('Input: accounts = [[1,2,3],[3,2,1]]; Output: 6', () => {
    expect(
      maximumWealth([
        [1, 2, 3],
        [3, 2, 1],
      ])
    ).toBe(6);

    expect(
      maximumWealth2([
        [1, 2, 3],
        [3, 2, 1],
      ])
    ).toBe(6);
  });

  test('Input: accounts = [[1,5],[7,3],[3,5]]; Output: 10', () => {
    expect(
      maximumWealth([
        [1, 5],
        [7, 3],
        [3, 5],
      ])
    ).toBe(10);

    expect(
      maximumWealth2([
        [1, 5],
        [7, 3],
        [3, 5],
      ])
    ).toBe(10);
  });

  test('Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]; Output: 17', () => {
    expect(
      maximumWealth([
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5],
      ])
    ).toBe(17);

    expect(
      maximumWealth2([
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5],
      ])
    ).toBe(17);
  });
});
