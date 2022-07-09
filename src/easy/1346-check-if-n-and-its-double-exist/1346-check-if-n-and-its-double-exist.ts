// https://leetcode.com/problems/check-if-n-and-its-double-exist/

export const checkIfExist = (arr: number[]): boolean => {
  const seen: Set<number> = new Set();

  for (const num of arr) {
    if (seen.has(num * 2) || seen.has(num / 2)) return true;
    seen.add(num);
  }

  return false;
};
