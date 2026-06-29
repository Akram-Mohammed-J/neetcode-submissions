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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;
        let result = null;

        const inorder = (node) => {
            if (node === null || result !== null) return;

            inorder(node.left);

            count++;
            if (count === k) {
                result = node.val;
                return;
            }

            inorder(node.right);
        };

        inorder(root);
        return result;
    }
}
