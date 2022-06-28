import { LinkedList } from '../../common/linked-list/linked-list';
import { deleteDuplicates } from './83-remove-duplicates-from-sorted-list';

describe('deleteDuplicates', () => {
  const list = new LinkedList();
  const listResult = new LinkedList();

  beforeEach(() => {
    list.clear();
    listResult.clear();
  });

  test('head = [1,1,2]', () => {
    [1, 1, 2].forEach(item => list.append(item));
    [1, 2].forEach(item => listResult.append(item));
    expect(deleteDuplicates(list.head)).toStrictEqual(listResult.head);
  });

  test('head = [1,1,2,2,3]', () => {
    [1, 1, 2, 2, 3].forEach(item => list.append(item));
    [1, 2, 3].forEach(item => listResult.append(item));
    expect(deleteDuplicates(list.head)).toStrictEqual(listResult.head);
  });
});
