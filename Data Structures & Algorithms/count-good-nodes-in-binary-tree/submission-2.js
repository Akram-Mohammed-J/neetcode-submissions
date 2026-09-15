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
        let count = 0;

        if (root == null) {
            return count;
        }
        function dfs(node, max) {
            if (node == null) {
                return;
            }
            // current node is good if maxSofar is less than the current node val increase the count

            if (node.val >= max) {
                count++;
            }
            const maxSofar = Math.max(max, node.val);

            if (node.left) dfs(node.left, maxSofar);
            if (node.right) dfs(node.right, maxSofar);
        }
         dfs(root, -Infinity);

        return count
    }
}
