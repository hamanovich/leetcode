// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

import { LinkedListNode } from '../../common/linked-list/linked-list-node';

export const pairSum = (head: LinkedListNode<number> | null): number => {
  const arr: number[] = [];
  let max = 0;

  while (head) {
    arr.push(head.value);
    head = head.next;
  }

  for (let i = 0; i < arr.length / 2; i++) {
    max = Math.max(max, arr[i] + arr[arr.length - 1 - i]);
  }

  return max;
};
