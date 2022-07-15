import { shortestToChar } from './821-shortest-distance-to-a-character';

describe('shortestToChar', () => {
  test('Input: s = "loveleetcode", c = "e"; Output: [3,2,1,0,1,0,0,1,2,2,1,0]', () => {
    expect(shortestToChar('loveleetcode', 'e')).toStrictEqual([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]);
  });

  test('Input: s = "aaab", c = "b"; Output: [3,2,1,0]', () => {
    expect(shortestToChar('aaab', 'b')).toStrictEqual([3, 2, 1, 0]);
  });
});
