// https://leetcode.com/problems/generate-parentheses/

export const generateParenthesis = (n: number): string[] => {
  const output: string[] = [];
  const pair: string[] = ['(', ')'];

  const backtrack = (left: number, right: number, str: string): void => {
    if (left > right) return;

    if (!left && !right) {
      output.push(str);
      return;
    }

    if (left > 0) backtrack(left - 1, right, str + pair[0]);
    /* istanbul ignore else */
    if (right > 0) backtrack(left, right - 1, str + pair[1]);
  };

  backtrack(n, n, '');

  return output;
};
