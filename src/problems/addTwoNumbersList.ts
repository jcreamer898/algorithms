// https://leetcode.com/problems/add-two-numbers/solution/
/**
 * Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 */

/*

 243
^

 564
^
 7{}


*/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const result = new ListNode();

    let carry = 0;
    let l1cur = l1;
    let l2cur = l2;
    let rCur = result;

    while(l1cur || l2cur) {
        const l1val = l1cur?.val || 0;
        const l2val = l2cur?.val || 0;
        
        let added = carry + l1val + l2val;
        
        if (added >= 10) {
            carry = 1;
            added = added % 10;
        } else {
            carry = 0;
        }
        
        rCur.val = added;
        
        l1cur = l1cur?.next;
        l2cur = l2cur?.next;
        
        if (l1cur || l2cur) {
            rCur.next = new ListNode();
            rCur = rCur.next;
        }
    }
    
    if (carry) {
        rCur.next = new ListNode(1);
    }
    
    return result;
};