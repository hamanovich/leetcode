import { findRestaurant } from './599-minimum-index-sum-of-two-lists';

describe('findRestaurant', () => {
  test('Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]; Output: ["Shogun"]', () => {
    expect(
      findRestaurant(
        ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
        ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']
      )
    ).toEqual(['Shogun']);
  });

  test('Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]; Output: ["Shogun"]', () => {
    expect(
      findRestaurant(['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['KFC', 'Shogun', 'Burger King'])
    ).toEqual(['Shogun']);
  });

  test('Input: list1 = ["A","B","C","D"], list2 = ["C","B"]; Output: ["C", "B"]', () => {
    expect(findRestaurant(['A', 'B', 'C', 'D'], ['C', 'B'])).toEqual(['C', 'B']);
  });
});
