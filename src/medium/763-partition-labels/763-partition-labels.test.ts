import { partitionLabels } from './763-partition-labels';

describe('partitionLabels', () => {
  test('Input: s = "ababcbacadefegdehijhklij"; Output: [9,7,8]', () => {
    expect(partitionLabels('ababcbacadefegdehijhklij')).toStrictEqual([9, 7, 8]);
  });

  test('Input: s = "eccbbbbdec"; Output: [10]', () => {
    expect(partitionLabels('eccbbbbdec')).toStrictEqual([10]);
  });
});
