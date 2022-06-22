/**
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElement = nums => {
  const hash = {};

  for (let num of nums) {
    if (hash[num]) hash[num]++;
    else hash[num] = 1;

    if (hash[num] > nums.length / 2) return num;
  }
};
