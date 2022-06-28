import { LinkedListNode } from '../../common/linked-list/linked-list-node';
import { reverseList } from '../206-reverse-linked-list/206-reverse-linked-list';
import { middleNode } from '../876-middle-of-the-linked-list/876-middle-of-the-linked-list';

export const isPalindrome = (head: LinkedListNode | null) => {
  let reverse = reverseList(middleNode(head) as LinkedListNode);

  while (reverse) {
    if (reverse.value !== head?.value) return false;

    reverse = reverse.next;
    head = head?.next as LinkedListNode;
  }

  return true;
};
