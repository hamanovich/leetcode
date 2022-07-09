// https://leetcode.com/problems/student-attendance-record-i/

export const checkRecord = (s: string): boolean => {
  let absent = 0;
  let late = 0;

  for (const day of s) {
    if (day === 'A') {
      absent++;

      if (absent === 2) return false;
    }

    if (day === 'L') {
      late++;

      if (late > 2) return false;
    } else late = 0;
  }

  return true;
};
