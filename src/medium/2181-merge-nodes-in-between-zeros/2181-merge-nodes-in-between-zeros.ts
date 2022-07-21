// https://leetcode.com/problems/merge-nodes-in-between-zeros/

import { LinkedList } from '../../common/linked-list/linked-list';
import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';

export const mergeNodes = (head: LinkedListNode<number> | null): LinkedListNode<number> | null => {
  const list = new LinkedList<number>();
  let on = head;
  let sum = 0;

  while (on) {
    if (on.value === 0) {
      if (sum) {
        list.append(sum);
        sum = 0;
      }
    } else sum += on.value;

    on = on.next;
  }

  return list.head;
};
