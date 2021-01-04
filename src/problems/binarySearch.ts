import assert from 'assert';

const binarySearch = <T>(nums: T[], target: T) => {
    let start = 0;
    let end = nums.length - 1;

    while(start < end) {
        const middle = start + Math.floor((end - start) / 2);
        
        if (nums[middle] === target) {
            return middle;
        }

        if (target > nums[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
};


assert.strictEqual(binarySearch([1,4,7,9,12,14,17,19,22,35,68], 9), 3)