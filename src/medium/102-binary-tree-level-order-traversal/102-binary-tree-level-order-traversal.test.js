import { TreeNode } from '../../common/tree/tree-node.js';
import { levelOrder } from './102-binary-tree-level-order-traversal.js';

describe('levelOrder', () => {
  test('root = [3,9,20,null,null,15,7]', () => {
    const tree = new TreeNode(3);
    tree.left = new TreeNode(9);
    tree.right = new TreeNode(20);
    tree.right.left = new TreeNode(15);
    tree.right.right = new TreeNode(7);
    expect(levelOrder(tree)).toStrictEqual([[3], [9, 20], [15, 7]]);
  });

  test('root = [1]', () => {
    const tree = new TreeNode(1);
    expect(levelOrder(tree)).toStrictEqual([[1]]);
  });

  test('root = []', () => {
    expect(levelOrder()).toStrictEqual([]);
  });
});
