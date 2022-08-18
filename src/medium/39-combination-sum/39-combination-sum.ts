// https://leetcode.com/problems/combination-sum/

export const combinationSum = (candidates: number[], target: number): number[][] => {
  const ans: number[][] = [];

  const dfs = (i: number, target: number, result: number[]): void => {
    if (target < 0) return;
    if (target === 0) {
      ans.push(result);
      return;
    }

    for (let j = i; j < candidates.length; j++) {
      const candidate = candidates[j];
      dfs(j, target - candidate, result.concat([candidate]));
    }
  };

  dfs(0, target, []);

  return ans;
};

combinationSum([2, 3, 6, 7], 7);
