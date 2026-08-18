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
    goodNodes(root) {
        if (root == null) return 0;
        let count = 0;
        function dfs(node, maxSoFar) {
            if (node == null) {
                return;
            }
            if (node.val >= maxSoFar) {
                count += 1;
            }
            const newMax = Math.max(node.val, maxSoFar);
            if (node.left) dfs(node.left, newMax);
            if (node.right) dfs(node.right, newMax);
        }
        dfs(root, -Infinity);
        return count;
    }
}
