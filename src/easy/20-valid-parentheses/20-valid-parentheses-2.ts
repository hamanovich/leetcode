export const isValid = (s: string): boolean => {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    switch (s.charAt(i)) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        if (s.charAt(i) !== stack.pop()) return false;
    }
  }

  return !stack.length;
};
