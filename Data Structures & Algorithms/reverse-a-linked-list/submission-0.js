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
     * @return {ListNode}
     */
    reverseList(head) {
        let curr = head;
        let prev = null;
        while (curr != null) {
            const next = curr.next; // 1. save next
            curr.next = prev; // 2. flip
            prev = curr; // 3. advance prev
            curr = next; // 4. advance curr
        }
        console.log(prev);
        return prev;
    }
}
