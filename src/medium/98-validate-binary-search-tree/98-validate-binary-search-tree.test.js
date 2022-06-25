import { TreeNode } from '../../common/tree/tree-node.js';
import { isValidBST } from './98-validate-binary-search-tree.js';

describe('isValidBST', () => {
  test('root = [2,1,3]', () => {
    const tree = new TreeNode(2);
    tree.left = new TreeNode(1);
    tree.right = new TreeNode(3);
    expect(isValidBST(tree)).toBeTruthy();
  });

  test('root = [5,1,4,null,null,3,6]', () => {
    const tree = new TreeNode(5);
    tree.left = new TreeNode(1);
    tree.right = new TreeNode(4);
    tree.right.left = new TreeNode(3);
    tree.right.right = new TreeNode(6);
    expect(isValidBST(tree)).toBeFalsy();
  });

  test('root = []', () => {
    expect(isValidBST()).toBeTruthy();
  });
});
