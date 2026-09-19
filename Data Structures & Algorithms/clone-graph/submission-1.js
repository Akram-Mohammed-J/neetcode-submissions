/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (node == null) {
            return null;
        }
        let oldToNew = new Map();
        function dfs(arr) {
            arr.forEach((eachItem) => {
                if (oldToNew.has(eachItem)) {
                    return;
                }
                const newNode = new Node(eachItem.val);
                oldToNew.set(eachItem, newNode);
                dfs(eachItem.neighbors);
            });
        }

        oldToNew.set(node, new Node(node.val));
        dfs(node.neighbors);

        for (let [oldNode, newNode] of oldToNew.entries()) {
            oldNode.neighbors.forEach((nei) => {
                newNode.neighbors.push(oldToNew.get(nei));
            });
        }

        return oldToNew.get(node);
    }
}
