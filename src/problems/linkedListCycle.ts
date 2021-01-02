// https://leetcode.com/problems/linked-list-cycle/solution/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    const nodes = new Set();
    
    let current = head;
    while(current) {
        nodes.add(current);
        
        current = current.next;
        
        if (nodes.has(current)) {
            return true;
        }
    }
    
    return false;
        
};