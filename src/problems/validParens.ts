// https://leetcode.com/problems/valid-parentheses/solution/

/*
( [ ) ]


push (
push [
pop 
*/




function isValid(s: string): boolean {
    const parenMap = new Map();
    parenMap.set('}', '{');
    parenMap.set(')', '(');
    parenMap.set(']', '[');
    
    // LIFO
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (!parenMap.has(s[i])) {
            stack.push(s[i]);
        } else {
            const char = stack.pop();
            
            if (parenMap.get(s[i]) !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};