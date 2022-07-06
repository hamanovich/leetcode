import { peakIndexInMountainArray } from './852-peak-index-in-a-mountain-array';

describe('peakIndexInMountainArray', () => {
  test('arr = [0,1,0]', () => {
    expect(peakIndexInMountainArray([0, 1, 0])).toBe(1);
  });

  test('arr = [0,2,1,0]', () => {
    expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1);
  });

  test('arr = [0,10,5,2]', () => {
    expect(peakIndexInMountainArray([0, 10, 5, 2])).toBe(1);
  });

  test('arr = [0,10,12,24, 5,2]', () => {
    expect(peakIndexInMountainArray([0, 10, 12, 24, 5, 2])).toBe(3);
  });
  test('arr = [40,48,61,75,100,99,98,39,30,10]', () => {
    expect(peakIndexInMountainArray([40, 48, 61, 75, 100, 99, 98, 39, 30, 10])).toBe(4);
  });
});
