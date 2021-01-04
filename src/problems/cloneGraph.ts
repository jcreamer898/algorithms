// https://leetcode.com/problems/clone-graph/

/**
 * Definition for Node.
 */

class GraphNode {
    val: number
    neighbors: GraphNode[];

    constructor(val?: number, neighbors?: GraphNode[]) {
        this.val = (val === undefined ? 0 : val);
        this.neighbors = (neighbors === undefined ? [] : neighbors);
    }
}

function cloneGraph(node: GraphNode | null): GraphNode | null {
    if (!node) return node;
    
    const q = [node];   
    const cache = new Map<number, GraphNode>()
    cache.set(node.val, new GraphNode(node.val));
    
    while (q.length) { 
        const current = q.shift();
       
        for (const neighbor of current.neighbors) {
            if (!cache.has(neighbor.val)) {
                cache.set(neighbor.val, new GraphNode(neighbor.val));
                q.push(neighbor);   
            }

            cache.get(current.val).neighbors.push(cache.get(neighbor.val));
        }
    }
    
    return cache.get(node.val);
};