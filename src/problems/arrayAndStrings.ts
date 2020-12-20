import assert from 'assert';

enum StringTypes {
    ASCII = 128,
    Unicode = 256,
}

const isUniqueChars = (str: string) => {
    if (str.length > StringTypes.ASCII) {
        return false;
    }

    const chars = {};
    for (let i = 0; i < str.length; i += 1) {
        const current = str[i];
        chars[current] = chars[current] || 0;
        chars[current] += 1;
        
         
        if (chars[current] > 1) {
            return false;
        }
    }

    return true;
};

assert.ok(isUniqueChars('abcd'));
assert.ok(!isUniqueChars('ddd'));

const isPermutation = (first, second) => {
    if (first.length !== second.length) {
        return false;
    }
    const sortedFirst = first.split("").sort().join("");
    const sortedSecond = second.split("").sort().join("");

    return sortedFirst === sortedSecond;
};

assert.ok(isPermutation('an african swallow', 'na arfcina wslalwo'));

const replaceSpaces = (chars: string, len: number) => {
    const str = chars.split('');
    const numberOfSpaces = str.slice(0, len).reduce((memo, char) => char === ' ' ? memo + 1 : memo, 0);

    let newIndex = len - 1 + (numberOfSpaces * 2);

    if (newIndex + 1 < str.length) {
        str[newIndex + 1] = null;
    }

    for (let oldIndex = len - 1; oldIndex >= 0; oldIndex -= 1) {
        if (str[oldIndex] === ' ') {
            str[newIndex] = '0';
            str[newIndex - 1] = '2';
            str[newIndex - 2] = '%';
            newIndex -= 3;
        } else {
            str[newIndex] = str[oldIndex];
            newIndex -= 1;
        }
    }

    return str.join("");
};

assert.strictEqual(replaceSpaces('Mr John Smith    ', 13), 'Mr%20John%20Smith');

const isPalindromePermutation = (str: string) => {
    const chars = str.toLowerCase().replace(' ', '').split("");
    const charCounts = {};

    for (let char of chars) {
        charCounts[char] = charCounts[char] || 0;
        charCounts[char] += 1;
    }

    let oddCount = 0;
    Object.values<number>(charCounts).forEach((count) => {
        if (count % 2 === 1) {
            oddCount += 1;
        }
    });

    return oddCount <= 1;
};

assert.ok(isPalindromePermutation('racecra'));
assert.ok(!isPalindromePermutation('racecrap'));
assert.ok(isPalindromePermutation('Tact Coa'));

const isOneEditAway = (first, second) => {
    if (first.length === second.length) {
        return isOneEditAwayReplace(first, second);
    } else if (first.length + 1 === second.length) {
        return isOneEditAwayInsert(first, second);
    }
    else if (first.length - 1 === second.length) {
        return isOneEditAwayInsert(second, first);
    }
};

const isOneEditAwayInsert = (first, second) => {
    let diffCount = 0;

    let j = 0;
    for (let i = 0; i < second.length; i += 1) {
        if (first[i] !== second[j]) {
            diffCount += 1;
            j += 1;
        }

        j += 1;
    }

    return diffCount <= 1;
};

const isOneEditAwayReplace = (first, second) => {
    let diffCount = 0;
    for (let i = 0; i < first.length; i += 1) {
        if (first[i] !== second[i]) {
            diffCount += 1;
        }
    }

    return diffCount <= 1;
}

assert.ok(isOneEditAway('pales', 'pale'));
assert.ok(isOneEditAway('pale', 'ple'));
assert.ok(isOneEditAway('spale', 'pale'));
assert.ok(isOneEditAway('pale', 'bale'));
assert.ok(isOneEditAway('baby', 'babe'));
assert.ok(!isOneEditAway('baby', 'cabe'));

const compress = (str: string) => {
    let compressed = "";
    const len = str.length;
    let currentCharCount = 1;
    
    for (let i = 0; i < len; i += 1) {
        if (str[i + 1] === str[i]) {
            currentCharCount += 1;
        } else {
            compressed += `${str[i]}${currentCharCount}`;
            currentCharCount = 1;
        }
    }

    return compressed.length < str.length ? compressed : str;
};

assert.strictEqual(compress('aabcccccaaa'), 'a2b1c5a3');
assert.strictEqual(compress('abcd'), 'abcd');
assert.strictEqual(compress('aabbccdd'), 'aabbccdd');
assert.strictEqual(compress('aaabbccdd'), 'a3b2c2d2');