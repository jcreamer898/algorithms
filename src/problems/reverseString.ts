// https://leetcode.com/problems/reverse-string/solution/

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let i = 0;
    let j = s.length - 1;
    
    while(i <= j) {
        const first = s[i];
        const last = s[j];

        s[i] = last;
        s[j] = first
        
        i++;
        j--;
    }
};