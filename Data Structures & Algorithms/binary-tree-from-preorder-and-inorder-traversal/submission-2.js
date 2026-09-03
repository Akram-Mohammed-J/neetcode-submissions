class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        // Pointer into preorder — since preorder is Root -> Left -> Right,
        // the next unused value is always the root of whatever subtree
        // we're currently building. Shared across all dfs calls.
        let preIndex = 0;

        // Precompute val -> index in inorder so we can find the root's
        // position in O(1) instead of scanning inorder every time.
        let indexOfVal = new Map();
        inorder.forEach((val, idx) => indexOfVal.set(val, idx));

        // Builds the subtree whose inorder values live in inorder[inLeft..inRight].
        function dfs(inLeft, inRight) {
            // Empty range means there's no subtree here (base case).
            if (inLeft > inRight) {
                return null;
            }

            // The next value in preorder is this subtree's root.
            let currentRoot = new TreeNode(preorder[preIndex]);
            preIndex++; // consume it so the next call picks up where we left off

            // Find where the root sits in inorder. Everything to its left
            // (within our current range) is the left subtree; everything
            // to its right is the right subtree.
            let mid = indexOfVal.get(currentRoot.val);

            // Left subtree = inorder[inLeft..mid-1]
            currentRoot.left = dfs(inLeft, mid - 1);
            // Right subtree = inorder[mid+1..inRight]
            currentRoot.right = dfs(mid + 1, inRight);

            // Always return the node we built — otherwise the parent's
            // .left / .right assignment above would get undefined.
            return currentRoot;
        }

        // Kick things off with the full range of inorder.
        return dfs(0, inorder.length - 1);
    }
}