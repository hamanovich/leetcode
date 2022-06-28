import { LinkedList } from '../../common/linked-list/linked-list';
import { getIntersectionNode } from './160-intersection-of-two-linked-lists';

describe('getIntersectionNode', () => {
  const listA = new LinkedList();
  const listB = new LinkedList();

  beforeEach(() => {
    listA.clear();
    listB.clear();
  });

  test('Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3; Output: Intersected at "8"', () => {
    listA.append(4);
    listA.append(1);
    listA.append(8);
    listA.append(4);
    listA.append(5);
    listB.append(5);
    listB.append(6);
    listB.append(1);
    listB.append(8);
    listB.append(4);
    listB.append(5);
    expect(getIntersectionNode(listA.head, listB.head)).toBe(1);
  });

  test('Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1; Output: Intersected at "2"', () => {
    listA.append(1);
    listA.append(9);
    listA.append(1);
    listA.append(2);
    listA.append(4);
    listB.append(3);
    listB.append(2);
    listB.append(4);
    expect(getIntersectionNode(listA.head, listB.head)).toBe(2);
  });

  test('Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2; Output: No intersection', () => {
    listA.append(2);
    listA.append(6);
    listA.append(4);
    listB.append(1);
    listB.append(5);
    expect(getIntersectionNode(listA.head, listB.head)).toBeNull();
  });

  test('Input: intersectVal = null, listA = null, listB = null', () => {
    expect(getIntersectionNode(null, null)).toBeNull();
  });
});
