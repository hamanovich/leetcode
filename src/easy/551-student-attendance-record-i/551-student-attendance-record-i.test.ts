import { checkRecord } from './551-student-attendance-record-i';

describe('checkRecord', () => {
  test('Input: s = "PPALLP"; Output: true', () => {
    expect(checkRecord('PPALLP')).toBeTruthy();
  });

  test('Input: s = "PPALLL"; Output: false', () => {
    expect(checkRecord('PPALLL')).toBeFalsy();
  });

  test('Input: s = "PPAALL"; Output: false', () => {
    expect(checkRecord('PPAALL')).toBeFalsy();
  });
});
