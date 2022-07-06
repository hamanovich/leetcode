export const singleNumber = (nums: number[]): number => nums.reduce((acc, el) => (acc ^= el));
