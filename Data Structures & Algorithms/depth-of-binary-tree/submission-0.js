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
     * @return {number}
     */
    maxDepth(root, depth = 0) {
        // BASE CASE: empty tree or past a leaf — return how deep we've gotten
        if (root === null) return depth;

        // RECURSIVE CASE: ask both subtrees how deep they go (depth + 1 for this node)
        const leftDepth = this.maxDepth(root.left, depth + 1);
        const rightDepth = this.maxDepth(root.right, depth + 1);

        // COMBINE: take the deeper of the two
        return Math.max(leftDepth, rightDepth);
    }
}
