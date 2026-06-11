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
     * @return {void}
     */
    reorderList(head) {
        let fast = head;
        let slow = head;
        // find middle
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        //reverse second half list
        let second = slow.next;
        let prev = null;
        slow.next = null; // now head will hold upto 0 to slow ptr

        while (second != null) {
            let next = second.next;
            second.next = prev;
            prev = second;
            second = next;
        }
       
        // update second half with reversed one 
        second = prev
        // now merge alternate  first value from the first half
        //  and second value from the seconc half

        let first = head;
        while (second) {
            let tmp1 = first.next;
            let tmp2 = second.next;
            first.next = second;
            second.next = tmp1;
            first = tmp1;
            second = tmp2;
        }
    }
}
