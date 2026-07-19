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
     * @return {number[][]}
     */
    levelOrder(root) {
        let result = [];
        let q = [];
        if(root == null) return []
        q.push(root);
        while (q.length > 0) {
            let level = [];
            let size = q.length;
            for (let i = 0; i < size; i++) {
                let node = q.shift();
                level.push(node.val);
                if (node.left) {
                    q.push(node.left);
                }
                if (node.right) {
                    q.push(node.right);
                }
            }
            result.push(level);
        }
        return result;
    }
}
