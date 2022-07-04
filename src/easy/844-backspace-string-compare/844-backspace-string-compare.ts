const countOfChars = (str: string): string => {
  const BACKSPACE = '#';
  const result: string[] = [];

  for (const char of str) {
    if (char === BACKSPACE) result.length && result.pop();
    else result.push(char);
  }

  return result.join('');
};

export const backspaceCompare = (s: string, t: string): boolean => countOfChars(s) === countOfChars(t);
