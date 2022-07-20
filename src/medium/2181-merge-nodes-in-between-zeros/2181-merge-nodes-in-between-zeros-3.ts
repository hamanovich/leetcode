// https://leetcode.com/problems/merge-nodes-in-between-zeros/

import { LinkedListNode } from '../../common/linked-list/linked-list-node';

export const mergeNodes = (head: LinkedListNode<number> | null): LinkedListNode<number> | null => {
  let node = head;

  while (node?.next) {
    node.value += node.next.value;
    node.next = node.next.next;

    if (!node?.next?.next) {
      node.next = null;
      break;
    }

    if (node.next.value === 0) node = node.next;
  }

  return head;
};
