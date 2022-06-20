//  Definition for singly-linked list.
export class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
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

  on.next = on.next.next;
  return head;
};
