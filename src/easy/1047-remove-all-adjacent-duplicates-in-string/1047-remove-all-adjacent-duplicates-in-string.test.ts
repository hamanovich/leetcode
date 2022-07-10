import { removeDuplicates } from './1047-remove-all-adjacent-duplicates-in-string';

describe('removeDuplicates', () => {
  test('Input: s = "abbaca"; Output: "ca"', () => {
    expect(removeDuplicates('abbaca')).toBe('ca');
  });

  test('Input: s = "azxxzy"; Output: "ay"', () => {
    expect(removeDuplicates('azxxzy')).toBe('ay');
  });
});
