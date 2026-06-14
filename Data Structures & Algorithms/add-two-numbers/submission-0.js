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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let curr1 = l1;
        let curr2 = l2;
        let dummy = new ListNode(0);
        let head = dummy;
        let carry = 0;
        while (curr1 || curr2 || carry > 0) {
            const digit1 = curr1 ? curr1.val : 0;
            const digit2 = curr2 ? curr2.val : 0;
            let sum = digit1 + digit2 + carry;

            let digit = sum % 10;
            carry = Math.floor(sum / 10);
            head.next = new ListNode(digit);

            head = head.next;
            if (curr1) curr1 = curr1.next;
            if (curr2) curr2 = curr2.next;
        }
        return dummy.next;
    }
}
