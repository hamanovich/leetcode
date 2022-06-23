/**
 * @param {LinkedListNode} head
 * @return {number}
 */
const getLength = head => {
  let length = 1;
  while (head) {
    length++;
    head = head.next;
  }
  return length;
};

/**
 * @param {LinkedListNode} head
 * @param {number} n
 * @return {LinkedListNode}
 */
export const removeNthFromEnd = (head, n) => {
  let on = head;
  let length = getLength(head);

  let leftIndex = length - n - 1;

  if (leftIndex === 0) return head.next;

  while (leftIndex > 1) {
    on = on.next;
    leftIndex--;
  }

  on.next = on.next?.next;

  return head;
};
