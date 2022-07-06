export const isMonotonic = (nums: number[]): boolean => {
  let inc = true;
  let dec = true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) inc = false;
    if (nums[i] < nums[i + 1]) dec = false;
  }

  return inc || dec;
};
