import { Stack } from '../../common/stack/stack';

const countOfChars = (str: string): string => {
  const BACKSPACE = '#';
  const stack = new Stack();

  for (const char of str) {
    if (char === BACKSPACE) stack.pop();
    else stack.push(char);
  }

  return stack.toString();
};

export const backspaceCompare = (s: string, t: string): boolean => countOfChars(s) === countOfChars(t);
