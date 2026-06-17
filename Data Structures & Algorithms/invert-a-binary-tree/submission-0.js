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
     * @return {TreeNode}
     */
   
    invertTree(root) {
        if (root === null) return null;
    
    // recursively invert subtrees
    const left = this.invertTree(root.left);
    const right = this.invertTree(root.right);
    
    // swap them at this node
    root.left = right;
    root.right = left;
    
    return root;
    }
}
