/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export const levelOrder = root => {
  if (!root) return [];

  const queue = [root];
  const levels = [];

  while (queue.length) {
    let size = queue.length;
    const level = [];

    while (size--) {
      const item = queue.shift();
      level.push(item.val);

      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }

    levels.push(level);
  }

  return levels;
};
