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
    maxPathSum(root) {
        let maximum = -Infinity;
        function dfs(root) {
            if (root == null) {
                return 0;
            }
            const left = dfs(root.left, maximum);
            const right = dfs(root.right, maximum);
            // ignore negative values from both left and right branches
            maximum = Math.max(maximum, Math.max(left, 0) + Math.max(right, 0) + root.val);

            // Best single branch to give to the parent
            return root.val + Math.max(left, right, 0);
        }
        dfs(root);
        return maximum;
    }
}
