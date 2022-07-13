// https://leetcode.com/problems/detect-capital/

export const detectCapitalUse = (word: string): boolean =>
  word === word.toUpperCase() ||
  word === word.toLowerCase() ||
  word === word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
