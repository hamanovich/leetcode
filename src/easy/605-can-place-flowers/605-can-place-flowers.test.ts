import { canPlaceFlowers } from './605-can-place-flowers';

describe('canPlaceFlowers', () => {
  test('Input: flowerbed = [0,0,1,0], n = 2; Output: false', () => {
    expect(canPlaceFlowers([0, 0, 1, 0], 2)).toBeFalsy();
  });

  test('Input: flowerbed = [0,0,1,0,1], n = 2; Output: false', () => {
    expect(canPlaceFlowers([0, 0, 1, 0, 1], 2)).toBeFalsy();
  });

  test('Input: flowerbed = [1,0,0,0,1], n = 1; Output: true', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBeTruthy();
  });

  test('Input: flowerbed = [1,0,0,0,1], n = 2; Output: false', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBeFalsy();
  });
});
