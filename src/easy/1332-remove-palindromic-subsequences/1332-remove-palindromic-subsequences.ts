// https://leetcode.com/problems/remove-palindromic-subsequences/

export const removePalindromeSub = (s: string): number => (s === s.split('').reverse().join('') ? 1 : 2);
