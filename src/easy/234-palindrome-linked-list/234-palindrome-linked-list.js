import { reverseList } from '../206-reverse-linked-list/206-reverse-linked-list';
import { middleNode } from '../876-middle-of-the-linked-list/876-middle-of-the-linked-list';

/**
 * @param {LinkedListNode} head
 * @return {boolean}
 */
export const isPalindrome = head => {
  let reverse = reverseList(middleNode(head));

  while (reverse) {
    if (reverse.value !== head.value) return false;

    reverse = reverse.next;
    head = head.next;
  }

  return true;
};
