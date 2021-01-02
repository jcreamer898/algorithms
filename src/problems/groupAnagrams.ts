// https://leetcode.com/problems/group-anagrams/solution/

function groupAnagrams(strs: string[]): string[][] {
    let sortMap = {};

    for (const str of strs) {
        const sorted = str.split("").sort().join("");
        
        if (!sortMap[sorted]) {
            sortMap[sorted] = [str];
        } else {
            sortMap[sorted].push(str)
        }
    }
    
    return Object.values(sortMap);
};