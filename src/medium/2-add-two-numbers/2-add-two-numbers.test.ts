import { LinkedList } from '../../common/linked-list/linked-list';
import { addTwoNumbers } from './2-add-two-numbers';

describe('addTwoNumbers', () => {
  const l1 = new LinkedList();
  const l2 = new LinkedList();
  const listResult = new LinkedList();

  beforeEach(() => {
    l1.clear();
    l2.clear();
    listResult.clear();
  });

  test('Input: l1 = [2,4,3], l2 = [5,6,4]; Output: [7,0,8]', () => {
    [2, 4, 3].forEach(item => l1.append(item));
    [5, 6, 4].forEach(item => l2.append(item));
    [7, 0, 8].forEach(item => listResult.append(item));
    expect(addTwoNumbers(l1.head, l2.head)).toStrictEqual(listResult.head);
  });

  test('Input: l1 = [0], l2 = [0]; Output: [0]', () => {
    l1.append(0);
    l2.append(0);
    listResult.append(0);
    expect(addTwoNumbers(l1.head, l2.head)).toStrictEqual(listResult.head);
  });

  test('Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]; Output: [8,9,9,9,0,0,0,1]', () => {
    [9, 9, 9, 9, 9, 9, 9].forEach(item => l1.append(item));
    [9, 9, 9, 9].forEach(item => l2.append(item));
    [8, 9, 9, 9, 0, 0, 0, 1].forEach(item => listResult.append(item));
    expect(addTwoNumbers(l1.head, l2.head)).toStrictEqual(listResult.head);
  });

  test('Input: l1 = [1], l2 = null; Output: l1', () => {
    l1.append(1);
    expect(addTwoNumbers(l1.head, null)).toStrictEqual(l1.head);
  });

  test('Input: l1 = null, l2 = [1]; Output: l2', () => {
    l2.append(2);
    expect(addTwoNumbers(null, l2.head)).toStrictEqual(l2.head);
  });
});
