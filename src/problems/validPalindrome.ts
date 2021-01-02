// https://leetcode.com/problems/valid-palindrome/solution/

function isPalindrome(s: string): boolean {
    const clean = s.replace(/[^\w]*/g, '').replace(/\_/, '').toLowerCase();
    
    let i = 0;
    let j = clean.length - 1;
    while (i <= j) {
        if (clean[i] !== clean[j]) {
            return false
        }
        
        j--;
        i++;
    }
    
    return true;
};