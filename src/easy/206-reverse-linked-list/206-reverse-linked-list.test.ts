import { LinkedList } from '../../common/linked-list/linked-list';
import { reverseList } from './206-reverse-linked-list';
import { reverseList as reverseListRecursive } from './206-reverse-linked-list-2';

describe('reverseList', () => {
  const list = new LinkedList();
  const listResult = new LinkedList();

  beforeEach(() => {
    list.clear();
    listResult.clear();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    listResult.prepend(1);
    listResult.prepend(2);
    listResult.prepend(3);
    listResult.prepend(4);
    listResult.prepend(5);
  });

  test('head = [1,2,3,4,5] while loop', () => {
    expect(reverseList(list.head)).toStrictEqual(listResult.head);
  });

  test('head = [1,2,3,4,5] recursively', () => {
    expect(reverseListRecursive(list.head)).toStrictEqual(listResult.head);
  });
});
