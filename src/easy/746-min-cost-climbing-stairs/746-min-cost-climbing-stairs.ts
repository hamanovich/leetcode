export const minCostClimbingStairs = (cost: number[]): number => {
  if (cost.length === 1) return 0;
  if (cost.length === 2) return Math.min(cost[0], cost[1]);

  let first = cost[0];
  let second = cost[1];

  for (let i = 2; i < cost.length; i++) {
    const current = cost[i] + Math.min(second, first);

    first = second;
    second = current;
  }

  return Math.min(first, second);
};
