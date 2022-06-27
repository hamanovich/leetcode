import { Stack } from '../../common/stack/stack';

/**
 * @param {string} str
 * @return {string}
 */
const countOfChars = str => {
  const BACKSPACE = '#';
  const stack = new Stack();

  for (let char of str) {
    if (char === BACKSPACE) stack.pop();
    else stack.push(char);
  }

  return stack.toString();
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const backspaceCompare = (s, t) => countOfChars(s) === countOfChars(t);
