/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode(0);
        dummy.next = head;

        let slow = dummy;
        let fast = dummy;

        // Advance fast by n+1 steps
        for (let i = 0; i <= n; i++) {
            fast = fast.next;
        }

        // Walk both until fast is null
        while (fast !== null) {
            slow = slow.next;
            fast = fast.next;
        }

        // Remove the node after slow
        slow.next = slow.next.next;

        return dummy.next;
    }
}
