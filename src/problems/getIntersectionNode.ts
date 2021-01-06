class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function getIntersectionNode(
    headA: ListNode | null,
    headB: ListNode | null,
): ListNode | null {
    let curA = headA;
    let curB = headB;

    while (curA !== curB) {
        curA = curA === null ? headA : curA.next;
        curB = curB === null ? headB : curB.next;
    }

    return curA;
}
