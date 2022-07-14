// https://leetcode.com/problems/di-string-match/

export const diStringMatch = (s: string): number[] => {
  let start = 0;
  let end = s.length;
  const output: number[] = [];

  for (const char of s) {
    if (char === 'I') {
      output.push(start);
      start++;
    } else {
      output.push(end);
      end--;
    }
  }

  output.push(start);

  return output;
};
