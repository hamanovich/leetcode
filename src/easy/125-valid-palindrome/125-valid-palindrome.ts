export const isPalindrome = (s: string): boolean => {
  const formatted = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return formatted === formatted.split('').reverse().join('');
};
