// https://leetcode.com/problems/valid-anagram/

export const isAnagram = (s: string, t: string): boolean => s.split('').sort().join('') === t.split('').sort().join('');
