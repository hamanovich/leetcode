/**
 * @param {LinkedListNode} head
 * @return {LinkedListNode}
 */
export const reverseList = (head, prev = null) => {
  if (head === null) return prev;

  const temp = head.next;
  head.next = prev;

  return reverseList(temp, head);
};
