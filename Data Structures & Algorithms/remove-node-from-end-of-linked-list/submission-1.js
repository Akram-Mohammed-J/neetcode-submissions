class Solution {
    removeNthFromEnd(head, n) {
        // 1. Count the total length of the list
        let length = 0;
        let temp = head;
        while (temp) {
            length++;
            temp = temp.next;
        }

        // 2. Calculate the target index from the start (0-indexed)
        let targetIndex = length - n;

        let dummy = new ListNode(0);
        let copyCurr = dummy;
        let curr = head;
        let currentIndex = 0;

        // 3. Rebuild the list, skipping the target index
        while (curr) {
            if (currentIndex === targetIndex) {
                curr = curr.next; // Skip the target node
                currentIndex++;
                continue; 
            }
            
            copyCurr.next = new ListNode(curr.val);
            copyCurr = copyCurr.next;
            curr = curr.next;
            currentIndex++;
        }

        return dummy.next;
    }
}
