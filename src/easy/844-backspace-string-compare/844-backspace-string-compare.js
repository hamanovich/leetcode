/**
 * @param {string} str
 * @return {string}
 */
const countOfChars = str => {
  const BACKSPACE = '#';
  const result = [];

  for (let char of str) {
    if (char === BACKSPACE) result.length && result.pop();
    else result.push(char);
  }

  return result.join('');
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const backspaceCompare = (s, t) => countOfChars(s) === countOfChars(t);
