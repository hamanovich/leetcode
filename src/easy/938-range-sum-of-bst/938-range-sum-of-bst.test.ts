import { BinaryTreeNode } from '../../common/tree/binary-tree-node';
import { rangeSumBST } from './938-range-sum-of-bst';

describe('rangeSumBST', () => {
  test('Input: root = [10,5,15,3,7,null,18], low = 7, high = 15; Output: 32', () => {
    const tree = new BinaryTreeNode(10);
    tree.left = new BinaryTreeNode(5);
    tree.right = new BinaryTreeNode(15);
    tree.left.left = new BinaryTreeNode(3);
    tree.left.right = new BinaryTreeNode(7);
    tree.right.right = new BinaryTreeNode(18);

    expect(rangeSumBST(tree, 7, 15)).toBe(32);
  });

  test('Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10; Output: 23', () => {
    const tree = new BinaryTreeNode(10);
    tree.left = new BinaryTreeNode(5);
    tree.right = new BinaryTreeNode(15);
    tree.left.left = new BinaryTreeNode(3);
    tree.left.right = new BinaryTreeNode(7);
    tree.right.left = new BinaryTreeNode(13);
    tree.right.right = new BinaryTreeNode(18);
    tree.left.left.left = new BinaryTreeNode(1);
    tree.left.right.left = new BinaryTreeNode(6);

    expect(rangeSumBST(tree, 6, 10)).toBe(23);
  });

  test('Input: root = [null], low = 6, high = 10; Output: 0', () => {
    expect(rangeSumBST(null, 6, 10)).toBe(0);
  });
});
