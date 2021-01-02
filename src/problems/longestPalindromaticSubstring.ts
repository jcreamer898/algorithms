// https://leetcode.com/submissions/detail/435221957/

var longestPalindrome = function(s) {
    let longest = '';

    const findLongestPalindrome = (str, i, j) => {
        while(i >= 0 && j < str.length && str[i] === str[j]) {
            i -= 1;
            j += 1;
        }
        // slice the qualified substring from the second last iteration
        return str.slice(i + 1, j);
    }

    for (let i = 0; i < s.length; i++) {
        // palindrome can center around 1 or 2 letters
        const current1 = findLongestPalindrome(s, i, i);
        const current2 = findLongestPalindrome(s, i, i + 1);
        const longerPalindrome = 
              current1.length > current2.length ? current1 : current2;
        if (longerPalindrome.length > longest.length) {
            longest = longerPalindrome;
        } 
    }

    return longest;
};