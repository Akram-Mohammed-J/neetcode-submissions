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
     * @return {boolean}
     */
    isValidBST(root, min = -Infinity, max = Infinity) {
        // Base case: empty subtree is trivially a valid BST
        if (root === null) return true;

        // Check current node against its allowed range
        if (root.val <= min || root.val >= max) return false;

        // Recurse with narrowed ranges:
        //   left subtree: values must be < root.val (tighten upper bound)
        //   right subtree: values must be > root.val (tighten lower bound)
        return (
            this.isValidBST(root.left, min, root.val) && this.isValidBST(root.right, root.val, max)
        );
    }
}
