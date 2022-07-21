import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';

export const addTwoNumbers = (l1: LinkedListNode | null, l2: LinkedListNode | null): LinkedListNode | null => {
  if (!l1) return l2;
  if (!l2) return l1;

  const head = new LinkedListNode(0);
  let pos = head;
  let temp = 0;

  while (l1 || l2 || temp > 0) {
    pos.next = new LinkedListNode(0);
    pos = pos.next;

    if (l1) {
      temp += Number(l1.value);
      l1 = l1.next;
    }
    if (l2) {
      temp += Number(l2.value);
      l2 = l2.next;
    }

    pos.value = temp % 10;
    temp = parseInt((temp / 10).toString());
  }

  return head.next;
};
