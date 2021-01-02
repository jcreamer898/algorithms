// https://leetcode.com/problems/reverse-words-in-a-string/solution/

function reverseWords(s: string): string {
    const words = s.split(' ');
    const result = [];

    for (let word of words) {
        if (word.trim().length) {
            result.unshift(word);
        }
    }
    
    return result.join(" ");
};