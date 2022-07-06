import { BinaryTreeNode } from '../../common/tree/binary-tree-node';

export const isValidBST = (
  root?: BinaryTreeNode | null,
  min?: BinaryTreeNode | number,
  max?: BinaryTreeNode | number
): boolean => {
  if (!root) return true;
  if (
    Number(root.val) <= Number((min as BinaryTreeNode)?.val) ||
    Number(root.val) >= Number((max as BinaryTreeNode)?.val)
  )
    return false;

  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};
