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
      dfs(j, target - candidates[j], result.concat([candidates[j]]));
    }
  };

  dfs(0, target, []);

  return ans;
};
