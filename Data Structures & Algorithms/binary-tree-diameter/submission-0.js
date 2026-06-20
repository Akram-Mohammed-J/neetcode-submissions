class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        const res = [0];
        this.dfs(root, res);
        return res[0];
    }

    /**
     * @param {TreeNode} root
     * @param {number[]} res
     * @return {number}
     */
    dfs(root, res) {
        if (root === null) {
            return 0;
        }
        const left = this.dfs(root.left, res);
        const right = this.dfs(root.right, res);
        res[0] = Math.max(res[0], left + right);
        return 1 + Math.max(left, right);
    }
}
