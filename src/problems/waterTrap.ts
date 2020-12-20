import assert from 'assert';

var trap = function (heights) {
    let trapped = 0,
        size = heights.length;
    let leftMax = new Array(size);
    let rightMax = new Array(size);

    leftMax[0] = heights[0];
    rightMax[size - 1] = heights[size - 1];

    for (let i = 1; i < size; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], heights[i]);
    }

    for (let i = size - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], heights[i]);
    }

    for (let i = 1; i < size - 1; i++) {
        trapped += Math.min(leftMax[i], rightMax[i]) - heights[i];
    }
    return trapped;
};

assert.strictEqual(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
assert.strictEqual(trap([4, 2, 0, 3, 2, 5]), 9);
