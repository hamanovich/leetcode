export const countBits = (n: number): number[] => {
  const res = [0];

  if (n === 0) return res;

  for (let i = 1; i <= n; i++) {
    const num = i % 2 === 0 ? res[i / 2] : res[Math.floor(i / 2)] + 1;
    res.push(num);
  }

  return res;
};

countBits(5);

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
