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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
          /*Approach we will use post order traversal  
         post order left , right , root 
        while scanning we will check  if the left and right child is same as p and q then we will record the min (current ansector , ancessotor ) 
         */

        if(root == null || root == p || root == q) return root
        const left = this.lowestCommonAncestor(root.left, p, q)
        const right = this.lowestCommonAncestor(root.right, p,q)

        if(left !== null && right !== null) return root

        return left != null ? left :right

    }
}
