// https://leetcode.com/problems/sort-array-by-parity/

export const sortArrayByParity = (nums: number[]): number[] => nums.sort(a => (a & 1 ? 1 : -1));
