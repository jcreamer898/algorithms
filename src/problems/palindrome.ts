import assert from 'assert';

export const isPalindrome = (str: string) => {
    if (str.length == 0) {
        return true;
    }

    const regex = /\W/gm;
    const cleaned = [...str.toLowerCase().replace(regex, '')];

    let i = 0;
    let j = cleaned.length - 1;

    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }

        i++;
        j--;
    }

    return true;
};

assert.ok(isPalindrome('racecar'));

const longestPalindrome = function (s) {
    let max = '';

    // iamaracecarblah
    // 0 0
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 2; j++) {
            let left = i;
            let right = i + j;

            while (s[left] && s[left] === s[right]) {
                left--;
                right++;
            }

            if (right - left - 1 > max.length) {
                max = s.substring(left + 1, right);
            }
        }
    }
    return max;
};

assert.strictEqual(longestPalindrome('iamaracecarblahblah'), 'racecar');
