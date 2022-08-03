// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

export const letterCombinations = (digits: string): string[] => {
  if (!digits) return [];

  const PHONE: Record<string, string[]> = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };
  const output: string[] = [];

  const calc = (str: string, i: number): void => {
    if (i === digits.length) {
      output.push(str);
      return;
    }

    for (const letter of PHONE[digits[i]]) calc(str + letter, i + 1);
  };

  calc('', 0);

  return output;
};
