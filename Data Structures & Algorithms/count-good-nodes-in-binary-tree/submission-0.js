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
    goodNodes(root, maxSofar = -Infinity) {
        if (root == null) return 0;

        let count = 0;
        if (root.val >= maxSofar) count = 1;
        const newMax = Math.max(root.val, maxSofar);

        count += this.goodNodes(root.left, newMax);
        count += this.goodNodes(root.right, newMax);

        return count;
    }
}
