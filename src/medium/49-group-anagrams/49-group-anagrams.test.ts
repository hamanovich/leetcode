import { groupAnagrams } from './49-group-anagrams';

describe('groupAnagrams', () => {
  test('["eat","tea","tan","ate","nat","bat"]', () => {
    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toStrictEqual([
      ['eat', 'tea', 'ate'],
      ['tan', 'nat'],
      ['bat'],
    ]);
  });

  test('[""]', () => {
    expect(groupAnagrams([''])).toStrictEqual([['']]);
  });

  test('["a"]', () => {
    expect(groupAnagrams(['a'])).toStrictEqual([['a']]);
  });
});
