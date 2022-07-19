// https://leetcode.com/problems/unique-binary-search-trees/

export const numTrees = (n: number): number => {
  const cache: number[] = [];

  const numTreeMemo = (n: number, cache: number[]): number => {
    if (n === 1) return 1;
    if (cache[n]) return cache[n];

    let totalTrees = 0;

    for (let root = 1; root <= n; root++) {
      let leftTrees = 1;
      if (root > 1) leftTrees = numTreeMemo(root - 1, cache);

      let rightTrees = 1;
      if (root < n) rightTrees = numTreeMemo(n - root, cache);

      totalTrees += leftTrees * rightTrees;
    }

    cache[n] = totalTrees;

    return cache[n];
  };

  return numTreeMemo(n, cache);
};
