export const findDisappearedNumbers = (nums: number[]): number[] => {
  let count = 1;
  const result = [];

  while (count <= nums.length) {
    if (!nums.includes(count)) result.push(count);
    count++;
  }

  return result;
};
