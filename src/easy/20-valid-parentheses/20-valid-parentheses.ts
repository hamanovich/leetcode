export const isValid = (s: string) => {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  for (const char of s) {
    if (char in pairs) stack.push(char);
    else {
      if (!stack.length) return false;
      if (pairs[stack.pop() as string] !== char) return false;
    }
  }

  return !stack.length;
};
