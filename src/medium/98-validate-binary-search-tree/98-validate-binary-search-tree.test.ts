import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';
import { isValidBST } from './98-validate-binary-search-tree';

describe('isValidBST', () => {
  test('Input: root = [2,1,3]; Output: true', () => {
    const tree = new BinaryTreeNode(2);
    tree.left = new BinaryTreeNode(1);
    tree.right = new BinaryTreeNode(3);
    expect(isValidBST(tree)).toBeTruthy();
  });

  test('Input: root = [5,1,4,null,null,3,6]; Output: false', () => {
    const tree = new BinaryTreeNode(5);
    tree.left = new BinaryTreeNode(1);
    tree.right = new BinaryTreeNode(4);
    tree.right.left = new BinaryTreeNode(3);
    tree.right.right = new BinaryTreeNode(6);
    expect(isValidBST(tree)).toBeFalsy();
  });

  test('root = []', () => {
    expect(isValidBST()).toBeTruthy();
  });
});
