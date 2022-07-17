export const findTheDistanceValue = (arr1: number[], arr2: number[], d: number): number =>
  arr1.filter(ar1 => arr2.every(ar2 => Math.abs(ar1 - ar2) > d)).length;
