// https://leetcode.com/problems/clone-graph/

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
    if (!node) return node;
    
    const q = [node];   
    const cache = new Map<number, Node>()
    cache.set(node.val, new Node(node.val));
    
    while (q.length) { 
        const current = q.shift();
       
        for (const neighbor of current.neighbors) {
            if (!cache.has(neighbor.val)) {
                cache.set(neighbor.val, new Node(neighbor.val));
                q.push(neighbor);   
            }

            cache.get(current.val).neighbors.push(cache.get(neighbor.val));
        }
    }
    
    return cache.get(node.val);
};