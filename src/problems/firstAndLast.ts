// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/discuss/957682/JavaScript-O(logn)-solution-with-explanation

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


/*
[5,7,7,8,8,10]
0,6,3
[8,8,10]
start = 3
end = 5
mid = 4
[8,8,10]
target = 8
end=mid-1=3
start === end = 3
*/

/**
* Retruns index of target or -1
*/
var binarySearch = (nums, target, direction) => {    
    let start = 0; 
    let end = nums.length - 1;
    let result = -1;
    
    while (start <= end) {
        let middle = start + Math.floor((end - start) / 2);

        if (target === nums[middle]) {
            result = middle;

            if (direction === "left") {
                end = middle - 1;
            } else if (direction === "right") {
                start = middle + 1;
            }
        } else if (target > nums[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    
    return result;
};

const notFound = [-1, -1];

var searchRange = function(nums, target) {
    if (!nums.length) return notFound;

    const indexLeft = binarySearch(nums, target, "left");
    const indexRight = binarySearch(nums, target, "right");
   
    return [indexLeft, indexRight];
};