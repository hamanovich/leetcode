/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = s => {
  const stack = [];
  const pairs = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  for (let char of s) {
    if (char in pairs) {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      if (pairs[stack.pop()] !== char) return false;
    }
  }

  return !stack.length;
};
