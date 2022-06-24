import { LinkedList } from '../../common/linked-list/linked-list';
import { removeElements } from './203-remove-linked-list-elements';

describe('removeElements', () => {
  const list = new LinkedList();
  const listResult = new LinkedList();

  beforeEach(() => {
    list.clear();
    listResult.clear();
  });

  test('head = [1,2,6,3,4,5,6], val = 6', () => {
    [1, 2, 6, 3, 4, 5, 6].forEach(item => list.append(item));
    [1, 2, 3, 4, 5].forEach(item => listResult.append(item));
    expect(removeElements(list.head, 6)).toStrictEqual(listResult.head);
  });

  test('head = [], val = 1', () => {
    expect(removeElements(list.head, 1)).toStrictEqual(listResult.head);
  });

  test('head = [7,7,7,7], val = 7', () => {
    [7, 7, 7, 7].forEach(item => list.append(item));
    expect(removeElements(list.head, 7)).toStrictEqual(listResult.head);
  });
});
