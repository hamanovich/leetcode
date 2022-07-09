export const isPalindrome = (s: string): boolean => {
  const formatted = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = formatted.length - 1;

  while (left <= right) {
    if (formatted[left] !== formatted[right]) return false;
    left++;
    right--;
  }

  return true;
};
