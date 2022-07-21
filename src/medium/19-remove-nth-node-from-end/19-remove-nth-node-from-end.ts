import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';

const getLength = (head: LinkedListNode): number => {
  let length = 1;
  while (head) {
    length++;
    head = head.next as LinkedListNode;
  }
  return length;
};

export const removeNthFromEnd = (head: LinkedListNode, n: number): LinkedListNode | null => {
  let on = head;
  const length = getLength(head);

  let leftIndex = length - n - 1;

  if (leftIndex === 0) return head.next;

  while (leftIndex > 1) {
    on = on.next as LinkedListNode;
    leftIndex--;
  }

  on.next = on.next?.next as LinkedListNode;

  return head;
};
