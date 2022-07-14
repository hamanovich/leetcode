import { diStringMatch } from './942-di-string-match';

describe('diStringMatch', () => {
  test('Input: s = "IDID"; Output: [0,4,1,3,2]', () => {
    expect(diStringMatch('IDID')).toStrictEqual([0, 4, 1, 3, 2]);
  });

  test('Input: s = "III"; Output: [0,1,2,3]', () => {
    expect(diStringMatch('III')).toStrictEqual([0, 1, 2, 3]);
  });

  test('Input: s = "DDI"; Output: [3,2,0,1]', () => {
    expect(diStringMatch('DDI')).toStrictEqual([3, 2, 0, 1]);
  });
});
