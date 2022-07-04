export const twoSum = (nums: number[], target: number): number[] => {
  const table: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    if (table[target - nums[i]] !== undefined) return [table[target - nums[i]], i];
    table[nums[i]] = i;
  }

  return [];
};
