export class NumArray {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.nums = nums;
  }

  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange(left, right) {
    let result = null;

    for (let i = left; i <= right; i++) {
      result += this.nums[i];
    }

    return result;
  }
}
