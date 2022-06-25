/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isValidBST = (root, min = -Infinity, max = Infinity) => {
  if (!root) return true;
  if (root.val <= min.val || root.val >= max.val) return false;

  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};
