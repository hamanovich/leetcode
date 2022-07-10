// https://leetcode.com/problems/reverse-words-in-a-string-iii/

export const reverseWords = (s: string): string =>
  s
    .split(' ')
    .map(w => w.split('').reverse().join(''))
    .join(' ');
