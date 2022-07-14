// https://leetcode.com/problems/partition-labels/

export const partitionLabels = (s: string): number[] => {
  const indices: Record<string, number> = {};

  for (let i = s.length - 1; i >= 0; i--) {
    if (!indices[s[i]]) indices[s[i]] = i;
  }

  const output: number[] = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    if (indices[s[i]] > end) end = indices[s[i]];
    if (i === end) {
      output.push(end - start + 1);
      start = i + 1;
    }
  }

  return output;
};
