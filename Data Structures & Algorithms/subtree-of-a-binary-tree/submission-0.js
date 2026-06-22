/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSameTree(s, t) {
        if (s == null && t == null) return true;
        if (s && t && s.val == t.val) {
            return this.isSameTree(s.left, t.left) && this.isSameTree(s.right, t.right);
        }
        return false;
    }
  isSubtree(root, subRoot) {
      if (root === null) return false;
    
    // check: does subRoot start here?
    if (this.isSameTree(root, subRoot)) return true;
    
    // recurse: try left subtree, or right subtree
    return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
}
}
