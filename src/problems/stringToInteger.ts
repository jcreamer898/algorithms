// https://leetcode.com/problems/string-to-integer-atoi/solution/

function isValidSymbol(char) {
    const validSymbols = ["+", "-", ' '];
    
    return validSymbols.indexOf(char) > -1
}

function isValidNumber(char) {
    return !isNaN(parseInt(char, 10));
}

const intMax = Math.pow(2, 31) - 1;
const intMin = -(Math.pow(2, 31));

function myAtoi(str) {
    const trimmed = str.trim();
    const [firstCharacter, ...rest] = trimmed;
    
    let valid = true;
    const chars = trimmed.split("");
    
    if (!chars.length) {
        return 0;
    }
    
    const convertedChars = [];
    for (let i = 0, len = chars.length; i < len; i += 1) {
        const char = chars[i];
        if (isValidSymbol(char) || isValidNumber(char)) {
            convertedChars.push(char);
        } else if (!convertedChars.length) {
            return 0;
        } else {
            break;
        }
    }
    
    if (isValidSymbol(convertedChars[0]) && !isValidNumber(convertedChars[1])) {
        return 0;
    }
    
    const parsed = parseInt(convertedChars.join(""), 10);
    
    if (parsed > intMax) {
        return intMax;
    } else if (parsed < intMin) {
        return intMin
    }
    
    return parsed;
};