/**
 * @param {LinkedListNode} head
 * @return {LinkedListNode}
 */
export const middleNode = head => {
  const temp = [head];

  while (temp[temp.length - 1].next) {
    temp.push(temp[temp.length - 1].next);
  }

  return temp[Math.trunc(temp.length / 2)];
};
