import { BinaryTreeNode } from '../../common/tree/binary-tree-node';
import { postorderTraversal } from './145-binary-tree-postorder-traversal';

describe('postorderTraversal', () => {
  test('Input: root = [1,null,2,3]; Output: [3,2,1]', () => {
    const tree = new BinaryTreeNode(1);
    tree.right = new BinaryTreeNode(2);
    tree.right.left = new BinaryTreeNode(3);
    expect(postorderTraversal(tree)).toStrictEqual([3, 2, 1]);
  });

  test('Input: root = []; Output: []', () => {
    const tree = new BinaryTreeNode(1);
    tree.right = new BinaryTreeNode(2);
    tree.right.left = new BinaryTreeNode(3);
    expect(postorderTraversal()).toStrictEqual([]);
  });

  test('Input: root = [1]; Output: [1]', () => {
    const tree = new BinaryTreeNode(1);
    expect(postorderTraversal(tree)).toStrictEqual([1]);
  });
});
