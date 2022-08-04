import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';
import { diameterOfBinaryTree } from './543-diameter-of-binary-tree';

describe('diameterOfBinaryTree', () => {
  test('Input: root = [1,2,3,4,5]; Output: 3', () => {
    const tree = new BinaryTreeNode(1);
    tree.left = new BinaryTreeNode(2);
    tree.right = new BinaryTreeNode(3);
    tree.right.left = new BinaryTreeNode(4);
    tree.right.right = new BinaryTreeNode(5);
    expect(diameterOfBinaryTree(tree)).toBe(3);
  });

  test('Input: root = [1,2]; Output: 1', () => {
    const tree = new BinaryTreeNode(1);
    tree.left = new BinaryTreeNode(2);
    expect(diameterOfBinaryTree(tree)).toBe(1);
  });
});
