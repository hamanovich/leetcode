import { summaryRanges } from './228-summary-ranges';

describe('summaryRanges', () => {
  test('Input: nums = [0,1,2,4,5,7]; Output: ["0->2","4->5","7"]', () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toStrictEqual(['0->2', '4->5', '7']);
  });

  test('Input: nums = [0,2,3,4,6,8,9]; Output: ["0","2->4","6","8->9"]', () => {
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toStrictEqual(['0', '2->4', '6', '8->9']);
  });
});
