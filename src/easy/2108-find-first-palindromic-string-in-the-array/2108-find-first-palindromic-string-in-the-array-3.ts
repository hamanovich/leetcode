// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

export const firstPalindrome = (words: string[]): string => words.find(x => x === [...x].reverse().join('')) ?? '';
