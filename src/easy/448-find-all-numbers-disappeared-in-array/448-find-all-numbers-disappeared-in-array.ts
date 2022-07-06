export const findDisappearedNumbers = (nums: number[]): number[] => {
  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (nums.indexOf(i) < 0) result.push(i);
  }

  return result;
};
