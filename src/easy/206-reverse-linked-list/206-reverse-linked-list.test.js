import { reverseList, reverseListRecursive, ListNode } from './206-reverse-linked-list';

describe('reverseList', () => {
  const node = new ListNode(1);
  const nodeReverse = new ListNode(5);

  beforeEach(() => {
    node.next = new ListNode(2);
    node.next.next = new ListNode(3);
    node.next.next.next = new ListNode(4);
    node.next.next.next.next = new ListNode(5);

    nodeReverse.next = new ListNode(4);
    nodeReverse.next.next = new ListNode(3);
    nodeReverse.next.next.next = new ListNode(2);
    nodeReverse.next.next.next.next = new ListNode(1);
  });

  test('head = [1,2,3,4,5] while loop', () => {
    expect(reverseList(node)).toStrictEqual(nodeReverse);
  });

  test('head = [1,2,3,4,5] recursively', () => {
    expect(reverseListRecursive(node)).toStrictEqual(nodeReverse);
  });
});
