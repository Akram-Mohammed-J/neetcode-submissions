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
    helper(node) {
        if (node === null) return { height: 0, balanced: true };

        const left =this.helper(node.left);
        const right = this.helper(node.right);

        const balanced =
            left.balanced && right.balanced && Math.abs(left.height - right.height) <= 1;
        const height = 1 + Math.max(left.height, right.height);

        return { height, balanced };
    }

    isBalanced(root) {
        return this.helper(root).balanced;
    }
}
