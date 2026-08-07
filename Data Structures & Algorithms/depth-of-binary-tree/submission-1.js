class Solution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  maxDepth(root, left = 0, right = 0) {
    if (root == null) {
      return 0;
    }

    left = this.maxDepth(root.left, ++left, right);

    right = this.maxDepth(root.right, left, ++right);

    return 1+ Math.max(left, right);
  }
}