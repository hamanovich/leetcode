import { longestCommonPrefix } from './14-longest-common-prefix';

describe('longestCommonPrefix', () => {
  test('Input: strs = ["flower","flow","flight"]; Output: "fl"', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  });

  test('Input: strs = ["dog","racecar","car"]; Output: ""', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });
});
