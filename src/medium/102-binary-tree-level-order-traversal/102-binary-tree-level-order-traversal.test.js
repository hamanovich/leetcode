import { BinaryTreeNode } from '../../common/tree/binary-tree-node.js';
import { levelOrder } from './102-binary-tree-level-order-traversal.js';

describe('levelOrder', () => {
  test('root = [3,9,20,null,null,15,7]', () => {
    const tree = new BinaryTreeNode(3);
    tree.left = new BinaryTreeNode(9);
    tree.right = new BinaryTreeNode(20);
    tree.right.left = new BinaryTreeNode(15);
    tree.right.right = new BinaryTreeNode(7);
    expect(levelOrder(tree)).toStrictEqual([[3], [9, 20], [15, 7]]);
  });

  test('root = [1]', () => {
    const tree = new BinaryTreeNode(1);
    expect(levelOrder(tree)).toStrictEqual([[1]]);
  });

  test('root = []', () => {
    expect(levelOrder()).toStrictEqual([]);
  });
});
