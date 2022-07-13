// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

export const firstPalindrome = (words: string[]): string => {
  for (const word of words) {
    if (word === word.split('').reverse().join('')) return word;
  }

  return '';
};
