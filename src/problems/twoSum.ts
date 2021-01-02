// https://leetcode.com/problems/two-sum/solution/

function twoSum(nums: number[], target: number): number[] {
    let answer: number[] = [];
    let numsMap = new Map();
    
    nums.forEach((num, i) => {
        numsMap.set(num, i);
    });
    
    let n;
    for (let i = 0; i < nums.length; i += 1) {
        const diff = target - nums[i];
        let indexComp = numsMap.get(diff);

        if (numsMap.has(diff) && indexComp !== i) {
            return [i, indexComp]
        }
    }
    
    return [];
};