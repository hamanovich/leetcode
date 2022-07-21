// https://leetcode.com/problems/merge-nodes-in-between-zeros/

import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';

export const mergeNodes = (head: LinkedListNode<number> | null): LinkedListNode<number> | null => {
  let prev = null;
  let on = head;

  while (on) {
    if (on.value === 0) {
      if (!prev) prev = on;
      else if (on.next) {
        prev = prev.next;
        (prev as LinkedListNode<number>).value = 0;
      }
    } else (prev as LinkedListNode<number>).value += on.value;

    on = on.next;
  }

  (prev as LinkedListNode<number>).next = null;

  return head;
};
