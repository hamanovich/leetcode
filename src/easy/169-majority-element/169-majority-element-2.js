/**
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElement = nums => nums.sort()[Math.floor(nums.length / 2)];
