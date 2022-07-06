export const majorityElement = (nums: number[]): number => {
  const hash: Record<number, number> = {};

  for (const num of nums) {
    if (hash[num]) hash[num]++;
    else hash[num] = 1;

    if (hash[num] > nums.length / 2) return num;
  }

  return 0;
};
