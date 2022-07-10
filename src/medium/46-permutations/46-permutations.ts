export const permute = (nums: number[], n = 0): number[][] => {
  if (n >= nums.length) return [[]];

  const result: number[][] = [];
  const prevs = permute(nums, n + 1);

  for (const prev of prevs) {
    for (let i = 0; i <= prev.length; i++) {
      const p = prev.slice(0);
      p.splice(i, 0, nums[n]);

      result.push(p);
    }
  }

  return result;
};
