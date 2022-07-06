import { firstUniqChar } from './387-first-unique-char-in-string';
import { firstUniqChar as firstUniqChar2 } from './387-first-unique-char-in-string-2';

test('firstUniqChar "leetcode" equal 0', () => {
  expect(firstUniqChar('leetcode')).toBe(0);
  expect(firstUniqChar2('leetcode')).toBe(0);
});

test('firstUniqChar "loveleetcode" equal 2', () => {
  expect(firstUniqChar('loveleetcode')).toBe(2);
  expect(firstUniqChar2('loveleetcode')).toBe(2);
});

test('firstUniqChar "aabb" equal -1', () => {
  expect(firstUniqChar('aabb')).toBe(-1);
  expect(firstUniqChar2('aabb')).toBe(-1);
});
