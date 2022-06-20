import { containsDuplicate, containsDuplicate2 } from './217-contains-duplicate';

describe('containsDuplicate', () => {
  test('nums = [1,2,3,1]', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
    expect(containsDuplicate2([1, 2, 3, 1])).toBeTruthy();
  });

  test('nums = [1,2,3,4]', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy();
    expect(containsDuplicate2([1, 2, 3, 4])).toBeFalsy();
  });

  test('nums = [1,1,1,3,3,4,3,2,4,2]', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy();
    expect(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy();
  });
});
