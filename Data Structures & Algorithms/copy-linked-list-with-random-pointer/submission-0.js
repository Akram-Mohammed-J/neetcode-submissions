// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head === null) return null;

        const oldToNew = new Map();
        oldToNew.set(null, null); // handle null random pointers

        // Pass 1: create all the new nodes
        let curr = head;
        while (curr !== null) {
            // TODO: create new node with curr.val, store mapping
            const newNode = new Node(curr.val);
            oldToNew.set(curr, newNode);
            curr = curr.next;
        }

        // Pass 2: wire up next and random
        curr = head;
        while (curr !== null) {
            // TODO: set newNode.next and newNode.random using the map
            const newNode = oldToNew.get(curr);
            newNode.next = oldToNew.get(curr.next);
            newNode.random = oldToNew.get(curr.random);
            curr = curr.next;
        }

        return oldToNew.get(head);
    }
}
