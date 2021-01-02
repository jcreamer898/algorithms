// https://leetcode.com/problems/reverse-linked-list/solution/

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

/*
prev=2
prev=3
prev=4
prev=5
return 5;
5, 4.next.next=4, 4.next=null
4, 3.next.next=3




*/

const reverse = (node) => {
    if (!node || !node.next) {
        return node;
    }
    
    const prev = reverse(node.next);
    node.next.next = node;
    node.next = null;

    return prev;
    
}

function reverseList(head: ListNode | null): ListNode | null {
    return reverse(head);
};