import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';
import { inorderTraversal as inorderTraversalDFS } from './94-binary-tree-inorder-traversal';
import { inorderTraversal as inorderTraversalInteraction } from './94-binary-tree-inorder-traversal-2';

describe('inorderTraversal', () => {
  test('Input: root = [1,null,2,3]; Output: [1,3,2]', () => {
    const tree = new BinaryTreeNode(1);
    tree.right = new BinaryTreeNode(2);
    tree.right.left = new BinaryTreeNode(3);

    expect(inorderTraversalDFS(tree)).toStrictEqual([1, 3, 2]);
    expect(inorderTraversalInteraction(tree)).toStrictEqual([1, 3, 2]);
  });

  test('root = [1]; Output: [1]', () => {
    const tree = new BinaryTreeNode(1);
    expect(inorderTraversalDFS(tree)).toStrictEqual([1]);
    expect(inorderTraversalInteraction(tree)).toStrictEqual([1]);
  });

  test('root = []; Output: []', () => {
    expect(inorderTraversalDFS(null)).toStrictEqual([]);
    expect(inorderTraversalInteraction(null)).toStrictEqual([]);
  });
});
