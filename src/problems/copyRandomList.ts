/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

const visited = new Map();

function copyRandomList(head: Node | null): Node | null {
    if (!head) {
        return null;
    }

    if (visited.has(head)) {
        return visited.get(head);
    }

    const newNode = new Node(head.val, null, null);
    visited.set(head, newNode);

    newNode.next = copyRandomList(head.next);
    newNode.random = copyRandomList(head.random);

    return newNode;
}
