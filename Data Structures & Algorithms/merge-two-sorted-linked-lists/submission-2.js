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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let curr1 = list1
        let curr2 = list2
        let dummy = new ListNode(0)
        let newList = dummy
        while( curr1 !== null && curr2 !== null) {
            if(curr1.val <= curr2.val) {
                newList.next = new ListNode(curr1.val)
                curr1 = curr1.next
            } else {
                  newList.next = new ListNode(curr2.val)
                  curr2 = curr2.next
            }
            newList = newList.next
        }
        newList.next = curr1 !== null ? curr1 : curr2;
        return dummy.next
    
    }
}
