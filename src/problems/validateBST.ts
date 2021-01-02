// https://leetcode.com/problems/validate-binary-search-tree/solution/

var isValidBST = function(root) {
    function callDFS(node, min, max) {
        if(!node) return true;

        if(node.val <= min || node.val >= max) return false;

        const isLeftValid = callDFS(node.left, min, node.val);
        const isRightValid = callDFS(node.right, node.val, max);
        
        return isLeftValid && isRightValid;
    }
    
    return callDFS(root, -Infinity, Infinity);
};