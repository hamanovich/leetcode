import { LinkedList } from '../../common/linked-list/linked-list';
import { isPalindrome } from './234-palindrome-linked-list';

describe('isPalindrome', () => {
  const list = new LinkedList();

  beforeEach(() => {
    list.clear();
  });

  test('head = [1,2,2,1]', () => {
    list.append(1);
    list.append(2);
    list.append(2);
    list.append(1);
    expect(isPalindrome(list.head)).toBeTruthy();
  });

  test('head = [1,2]', () => {
    list.append(1);
    list.append(2);
    expect(isPalindrome(list.head)).toBeFalsy();
  });
});
