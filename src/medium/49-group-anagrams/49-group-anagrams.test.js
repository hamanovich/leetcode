import { groupAnagrams } from './49-group-anagrams';

test('groupAnagrams ["eat","tea","tan","ate","nat","bat"]', () => {
  expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toBe([
    ['bat'],
    ['nat', 'tan'],
    ['ate', 'eat', 'tea'],
  ]);
});

test('groupAnagrams [""]', () => {
  expect(groupAnagrams([''])).toBe([['']]);
});

test('groupAnagrams ["a"]', () => {
  expect(groupAnagrams(['a'])).toBe([['a']]);
});
