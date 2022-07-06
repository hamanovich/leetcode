export const containsDuplicate = (nums: number[]): boolean => {
  const arr: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(nums[i])) return true;
    arr.push(nums[i]);
  }

  return false;
};
