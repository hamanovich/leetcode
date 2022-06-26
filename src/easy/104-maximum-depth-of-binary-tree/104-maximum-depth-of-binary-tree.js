// DFS - Depth First Search

/**
 * @param {BinaryTreeNode} root
 * @return {number}
 */
export const maxDepth = root => {
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
