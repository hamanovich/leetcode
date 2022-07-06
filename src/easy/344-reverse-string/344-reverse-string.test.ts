import { reverseString } from './344-reverse-string';

describe('reverseString', () => {
  test('s = ["h","e","l","l","o"]', () => {
    const s = ['h', 'e', 'l', 'l', 'o'];
    const reversed = ['h', 'e', 'l', 'l', 'o'].reverse();
    reverseString(s);
    expect(s).toStrictEqual(reversed);
  });

  test('s = ["H","a","n","n","a","h"]', () => {
    const s = ['H', 'a', 'n', 'n', 'a', 'h'];
    const reversed = ['H', 'a', 'n', 'n', 'a', 'h'].reverse();
    reverseString(s);
    expect(s).toStrictEqual(reversed);
  });
});
