import { kidsWithCandies } from './1431-kids-with-the-greatest-number-of-candies';

describe('kidsWithCandies', () => {
  test('Input: candies = [2,3,5,1,3], extraCandies = 3; Output: [true,true,true,false,true]', () => {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toStrictEqual([true, true, true, false, true]);
  });

  test('Input: candies = [4,2,1,1,2], extraCandies = 1; Output: [true,false,false,false,false]', () => {
    expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toStrictEqual([true, false, false, false, false]);
  });

  test('Input: candies = [12,1,12], extraCandies = 10; Output: [true,false,true]', () => {
    expect(kidsWithCandies([12, 1, 12], 10)).toStrictEqual([true, false, true]);
  });
});
