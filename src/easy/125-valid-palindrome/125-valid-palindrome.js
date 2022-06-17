/**
 * @param {string} s
 * @return {boolean}
 */
export const isPalindrome = s => {
  const formatted = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return formatted === formatted.split('').reverse().join('');
};
