import { BinaryTreeNode } from '../../common/tree/binary-tree-node';
import { averageOfLevels } from './637-average-of-levels-in-binary-tree';

describe('averageOfLevels', () => {
  test('Input: root = [3,9,20,null,null,15,7]; Output: [3.00000,14.50000,11.00000]', () => {
    const tree = new BinaryTreeNode(3);
    tree.left = new BinaryTreeNode(9);
    tree.right = new BinaryTreeNode(20);
    tree.right.left = new BinaryTreeNode(15);
    tree.right.right = new BinaryTreeNode(7);

    expect(averageOfLevels(tree)).toStrictEqual([3, 14.5, 11]);
  });

  test('Input: root = [3,9,20,15,7]; Output: [3.00000,14.50000,11.00000]', () => {
    const tree = new BinaryTreeNode(3);
    tree.left = new BinaryTreeNode(9);
    tree.right = new BinaryTreeNode(20);
    tree.left.left = new BinaryTreeNode(15);
    tree.left.right = new BinaryTreeNode(7);

    expect(averageOfLevels(tree)).toStrictEqual([3, 14.5, 11]);
  });
});
