import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';

export const middleNode = (head: LinkedListNode): LinkedListNode | null => {
  const temp = [head];

  while (temp[temp.length - 1].next) {
    temp.push(temp[temp.length - 1].next as LinkedListNode);
  }

  return temp[Math.trunc(temp.length / 2)];
};
