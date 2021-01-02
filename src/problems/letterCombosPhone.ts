// https://leetcode.com/problems/letter-combinations-of-a-phone-number/solution/

const letterMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],                       
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
};

/*
2,2,3

aad
abd
acd

ae
af
bd
be
bf

for each digit
  return each 

*/

const combo = (digits: string[], combos: string[], str: string) => {
    if (!digits.length) {
        combos.push(str);
        return;
    }
    
    const digit = digits[0];
    for (const letter of letterMap[digit]) {
        combo(digits.slice(1), combos, str + letter);
    }
    
    return combos;
};

function letterCombinations(digits: string): string[] {
    if (!digits) {
        return [];
    }
    const results = [];
    combo(digits.split(""), results, '');
    return results;
};