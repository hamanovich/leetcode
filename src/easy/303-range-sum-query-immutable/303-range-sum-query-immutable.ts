export class NumArray {
  constructor(public nums: number[]) {}

  sumRange(left: number, right: number): number {
    let result = 0;

    for (let i = left; i <= right; i++) {
      result += this.nums[i];
    }

    return result;
  }
}
