// https://leetcode.com/problems/length-of-last-word/

export const lengthOfLastWord = (s: string): number => Number(s.trim().split(' ').pop()?.length);
